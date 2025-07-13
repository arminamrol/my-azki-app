import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAppStore } from "../../../store/userStore";
import { getThirdDiscounts } from "../../../services/api/discountService";
import Select from "../../core/Select";
import Modal from "../../core/Modal";

type DiscountsFormData = {
  thirdPartyDiscount: string;
  driverAccidentDiscount: string;
};

export function DiscountsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useAppStore((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<DiscountsFormData>();

  const {
    data: discounts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["thirdDiscounts"],
    queryFn: getThirdDiscounts,
  });

  const discountOptions = useMemo(
    () => discounts?.map((d) => ({ value: d.id, label: d.title })) || [],
    [discounts]
  );

  const onSubmit = (data: DiscountsFormData) => {
    console.log("Selected Discounts:", data);
    setIsModalOpen(true);
  };

  if (isLoading) return <div>در حال بارگذاری تخفیف‌ها...</div>;
  if (isError) return <div>خطا در دریافت اطلاعات.</div>;

  return (
    <>
      <div className="page-content">
        <h2 className="page-title">بیمه شخص ثالث</h2>
        <p className="text-sm text-gray-400">
          درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-3 flex flex-col"
        >
          <Select
            label="تخفیف عدم خسارت ثالث"
            placeholder="درصد تخفیف ثالث"
            options={discountOptions}
            {...register("thirdPartyDiscount", { required: true })}
            isSelected={isValid}
          />
          <Select
            label="تخفیف عدم خسارت حوادث راننده"
            placeholder="درصد تخفیف حوادث راننده"
            options={discountOptions}
            {...register("driverAccidentDiscount", { required: true })}
            isSelected={isValid}
          />

          <button
            type="submit"
            disabled={!isValid}
            className="rounded-4xl px-8 py-2 flex items-center justify-center cursor-pointer bg-green-700 hover:bg-green-800 disabled:bg-gray-300 text-white w-max self-center lg:self-end"
          >
            استعلام قیمت
          </button>
        </form>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="خلاصه اطلاعات"
      >
        {user ? (
          <div>
            <p>
              <strong>نام:</strong> {user.firstName}
            </p>
            <p>
              <strong>نام خانوادگی:</strong> {user.lastName}
            </p>
          </div>
        ) : (
          <p>اطلاعات کاربری یافت نشد.</p>
        )}
      </Modal>
    </>
  );
}
