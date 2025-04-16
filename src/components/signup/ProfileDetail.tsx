import { preventNumbers } from "../../utils/inputHandlers";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";

const ProfileDetail = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="input-div">
        <InputField label="Date of Birth" id="dob" type="date" />
        <SelectField
          label="Gender"
          id="gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
        />
      </div>
      <div className="input-div">
        <InputField label="Username" id="username" />
        <InputField label="Genre" id="genre" onKeyDown={preventNumbers} />
      </div>
    </div>
  );
};

export default ProfileDetail;
