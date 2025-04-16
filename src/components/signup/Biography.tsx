import CheckboxField from "../common/CheckboxField";
import TextAreaField from "../common/TextAreaField";

const Biography = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <TextAreaField
        label="Short Biography"
        id="biography"
        placeholder="Write about yourself"
        rows={5}
      />
      <CheckboxField
        id="termsAccepted"
        label="I agree to Terms of Use, Privacy Policy, and Conditions of Sale and to receiving emails from Annapurna"
      />
    </div>
  );
};

export default Biography;
