import { z } from "zod";

const persianRegex = /^[\u0600-\u06FF\s]+$/;

export const registrationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "نام اجباری است" })
    .regex(persianRegex, { message: "نام فقط باید شامل حروف فارسی باشد" }),
  lastName: z
    .string()
    .min(1, { message: "نام خانوادگی اجباری است" })
    .regex(persianRegex, {
      message: "نام خانوادگی فقط باید شامل حروف فارسی باشد",
    }),
  mobile: z
    .string()
    .min(1, { message: "شماره موبایل اجباری است" })
    .regex(/^09\d{9}$/, { message: "فرمت شماره موبایل صحیح نیست" }),
  password: z
    .string()
    .min(4, { message: "رمز عبور باید حداقل ۴ کاراکتر باشد" })
    .max(10, { message: "رمز عبور باید حداکثر ۱۰ کاراکتر باشد" })
    .regex(/[A-Z]/, {
      message: "رمز عبور باید شامل حداقل یک حرف بزرگ لاتین باشد",
    })
    .regex(/[a-z]/, {
      message: "رمز عبور باید شامل حداقل یک حرف کوچک لاتین باشد",
    })
    .regex(/[0-9]/, { message: "رمز عبور باید شامل حداقل یک عدد باشد" }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
