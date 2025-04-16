import * as Yup from "yup";

export const biographySchema = Yup.object().shape({
  biography: Yup.string()
    .required("Biography is required")
    .min(10, "Biography must be at least 10 characters long")
    .max(500, "Biography can't exceed 500 characters"),
  termsAccepted: Yup.boolean().oneOf([true], "You must accept the terms"),
});
