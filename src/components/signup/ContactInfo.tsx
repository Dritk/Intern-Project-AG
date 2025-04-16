import countryList from "../../utils/countryList";
import currencyList from "../../utils/currencyList";
import { preventAlphabets } from "../../utils/inputHandlers";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="input-div">
        <InputField
          label="Telephone Number"
          id="telNumber"
          onKeyDown={preventAlphabets}
        />
        <InputField
          label="Alternative Number"
          id="altNumber"
          onKeyDown={preventAlphabets}
        />
      </div>
      <div className="input-div">
        <SelectField label="Country" id="country" options={countryList} />
        <SelectField label="Currency" id="currency" options={currencyList} />
      </div>
      <div className="input-div">
        <InputField label="Address 1" id="address" />
        <InputField label="Address 2" id="address2" />
      </div>
    </div>
  );
};

export default ContactInfo;
