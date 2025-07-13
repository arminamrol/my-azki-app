import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getInsuranceCompanies } from "../../../services/api/companyService";
import { classnames } from "../../../utils/classNames";
import Select from "../../core/Select";
import arrow from "~/icons/arrow.svg";

type CompanyFormData = {
  previousInsurer: string;
};

export function SelectCompanyPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<CompanyFormData>({
    mode: "onChange",
  });

  const {
    data: companies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["insuranceCompanies"],
    queryFn: getInsuranceCompanies,
  });

  const companyOptions = useMemo(
    () =>
      companies?.map((company) => ({
        value: company.id,
        label: company.title,
      })) || [],
    [companies]
  );

  const selectedInsurer = watch("previousInsurer");

  const onSubmit = (data: CompanyFormData) => {
    console.log("Selected Previous Insurer:", data);
    // navigate('/next-page'); // TODO: Navigate to the final page
  };

  if (isLoading) return <div>در حال بارگذاری شرکت‌های بیمه...</div>;
  if (isError) return <div>خطا در دریافت اطلاعات.</div>;

  return (
    <div className="page-content">
      <h2 className="page-title">انتخاب شرکت بیمه</h2>
      <p className="text-sm text-gray-400">
        شرکت بیمه‌گر قبلی خود را در این بخش وارد کنید.
      </p>

      <form
        className="flex-col space-y-3 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Select
          label="شرکت بیمه گر قبلی"
          placeholder="شرکت بیمه گر قبلی"
          options={companyOptions}
          value={selectedInsurer}
          {...register("previousInsurer", {
            required: true,
          })}
          error={errors.previousInsurer}
        />

        <div className="flex items-center justify-between w-full">
          <button
            className="border cursor-pointer gap-1 whitespace-nowrap w-fit rounded-4xl border-green-500  px-4 py-1 flex items-center justify-center"
            type="button"
            onClick={() => navigate(-1)}
          >
            <img src={arrow} width={8} height={8} className="rotate-180" />
            <p className="text-green-500 text-sm ">مرحله قبل</p>
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
