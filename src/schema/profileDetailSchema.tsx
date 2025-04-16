import * as Yup from "yup";

export const profileDetailSchema = Yup.object().shape({
  dob: Yup.date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Date of birth is required")
    .max(new Date(), "Date of Birth cannot be in the future")
    .test("is-adult", "You must be at least 18 years old", (value) => {
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 18);
      return value <= cutoff;
    }),
  gender: Yup.string().required("Gender is required"),
  username: Yup.string()
    .required("Username is required")
    .matches(/^\w+$/, "Username must be alphanumeric or contain underscores"),
  genre: Yup.string().required("Genre is required"),
});
