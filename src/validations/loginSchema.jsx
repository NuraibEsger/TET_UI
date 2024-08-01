import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  number: Yup.string()
    .matches(/^\+994\d{9}$/, "Invalid phone number format")
    .required("Please enter your phone number."),

  password: Yup.string()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars")
    .required("Requirid!"),
});
