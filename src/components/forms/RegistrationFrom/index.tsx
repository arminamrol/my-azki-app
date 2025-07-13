import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import {
  registrationSchema,
  type RegistrationFormData,
} from "../../../libs/validations/authSchema";
import { useAppStore } from "../../../store/userStore";
import FormInput from "../../core/FormInput";

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const setUser = useAppStore((state) => state.setUser);
  const navigate = useNavigate();

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Form submitted successfully:", data);
    setUser(data.firstName, data.lastName);
    navigate("/select-insurance");
  };

  return (
    <div className="flex flex-col space-y-3 w-full lg:space-y-4 items-center lg:items-start">
      <h2 className="text-2xl lg:text-3xl">ثبت نام</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 w-full lg:w-1/2"
      >
        <div className="lg:flex-row flex-col space-y-3 space-x-3">
          <FormInput
            label="نام"
            {...register("firstName")}
            error={errors.firstName}
          />
          <FormInput
            label="نام خانوادگی"
            {...register("lastName")}
            error={errors.lastName}
          />
        </div>

        <FormInput
          label="شماره موبایل"
          {...register("mobile")}
          error={errors.mobile}
        />
        <FormInput
          label="رمز عبور"
          type="password"
          {...register("password")}
          error={errors.password}
        />

        <button
          type="submit"
          className="rounded-4xl px-8 py-2 flex items-center justify-center cursor-pointer bg-green-700 hover:bg-green-800 text-white w-max self-center lg:self-end"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
