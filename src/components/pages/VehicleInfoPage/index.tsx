import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getVehicleTypes } from "../../../services/api/vehicleService";
import Select from "../../core/Select";
import arrow from "~/icons/arrow.svg";
import { classnames } from "../../../utils/classNames";
import { useAppStore } from "../../../store/userStore";

type VehicleInfoFormData = {
  vehicleType: string;
  vehicleUsage: string;
};

export function VehicleInfoPage() {
  const navigate = useNavigate();
  const setVehicleInfo = useAppStore((state) => state.setVehicleInfo);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<VehicleInfoFormData>();

  const selectedTypeId = watch("vehicleType");

  const {
    data: vehicleTypes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["vehicleTypes"],
    queryFn: getVehicleTypes,
  });

  const typeOptions = useMemo(
    () =>
      vehicleTypes?.map((type) => ({ value: type.id, label: type.title })) ||
      [],
    [vehicleTypes]
  );

  const usageOptions = useMemo(() => {
    const selectedType = vehicleTypes?.find(
      (type) => type.id === Number(selectedTypeId)
    );
    return (
      selectedType?.usages.map((usage) => ({
        value: usage.id,
        label: usage.title,
      })) || []
    );
  }, [vehicleTypes, selectedTypeId]);

  const onSubmit = (data: VehicleInfoFormData) => {
    const selectedType = typeOptions.find(
      (opt) => opt.value === Number(data.vehicleType)
    );
    const selectedUsage = usageOptions.find(
      (opt) => opt.value === Number(data.vehicleUsage)
    );

    setVehicleInfo({
      vehicleType: selectedType || null,
      vehicleUsage: selectedUsage || null,
    });

    navigate("/select-company");
  };

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (isError) return <div>خطایی رخ داد. لطفا دوباره تلاش کنید.</div>;

  return (
    <div className="page-content">
      <h2 className="page-title">اطلاعات خودرو</h2>
      <p className="text-sm text-gray-400">
        نوع و مدل خودروی خود را انتخاب کنید
      </p>
      <form
        className="flex-col space-y-3 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex lg:flex-row flex-col space-y-3 space-x-3 w-full">
          <Select
            label="نوع خودرو"
            placeholder="نوع خودرو"
            options={typeOptions}
            {...register("vehicleType", {
              onChange: () => setValue("vehicleUsage", ""),
              required: true,
            })}
            error={errors.vehicleType}
            isSelected={!!selectedTypeId}
          />

          <Select
            label="مدل خودرو"
            placeholder="مدل خودرو"
            options={usageOptions}
            {...register("vehicleUsage", {
              required: true,
            })}
            error={errors.vehicleUsage}
            disabled={!selectedTypeId}
            isSelected={isValid}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <button
            className="border cursor-pointer gap-1 whitespace-nowrap w-fit rounded-4xl border-green-500  px-4 py-1 flex items-center justify-center"
            type="button"
            onClick={() => navigate(-1)}
          >
            <img src={arrow} width={8} height={8} className="rotate-180" />
            <p className="text-green-500 text-sm ">بازگشت</p>
          </button>
          <button
            className="border cursor-pointer gap-1 whitespace-nowrap w-fit rounded-4xl border-green-500 disabled:border-gray-300 px-4 py-1 flex  items-center justify-center"
            type="submit"
            disabled={!isValid}
          >
            <p
              className={classnames("text-sm", {
                "text-green-500 ": isValid,
                "text-gray-300": !isValid,
              })}
            >
              مرحله بعد
            </p>
            <img
              src={arrow}
              width={8}
              height={8}
              className={classnames({ grayscale: !isValid })}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
