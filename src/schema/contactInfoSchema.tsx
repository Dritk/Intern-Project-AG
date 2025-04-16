import * as Yup from "yup";

export const contactInfoSchema = Yup.object().shape({
  telNumber: Yup.string()
    .required("Telephone Number is required")
    .matches(/^\d{6}$/, "Telephone number must be 6 digits"),

  altNumber: Yup.string()
    .matches(/^\d{10}$/, "Alternative number must be 10 digits")
    .nullable(),

  country: Yup.string().required("Country is required"),
  currency: Yup.string().required("Currency is required"),

  address: Yup.string().required("Address 1 is required"),

  address2: Yup.string().optional(),
});
