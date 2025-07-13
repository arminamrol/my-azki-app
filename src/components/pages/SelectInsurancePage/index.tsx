import { useNavigate } from "react-router-dom";
import SelectionCard from "../../core/SelectionCard";
import insuranceIcon from "~/icons/insurance.svg";

export function SelectInsurancePage() {
  const navigate = useNavigate();

  const handleThirdPartySelection = () => {
    navigate("/vehicle-info");
  };

  return (
    <div className="page-content">
      <h2 className="page-title">انتخاب بیمه</h2>
      <div className="w-full flex lg:flex-row flex-col justify-center lg:justify-start items-center gap-3">
        <SelectionCard
          title="بیمه شخص ثالث"
          isActive={true}
          onClick={handleThirdPartySelection}
          image={insuranceIcon}
        />

        <SelectionCard
          image={insuranceIcon}
          title="بیمه بدنه"
          isActive={false}
        />
      </div>
    </div>
  );
}
