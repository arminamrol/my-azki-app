import { useNavigate } from "react-router-dom";
import SelectionCard from "../../core/SelectionCard";

export function SelectInsurancePage() {
  const navigate = useNavigate();

  const handleThirdPartySelection = () => {
    navigate("/vehicle-info");
  };

  return (
    <div className="page-content insurance-selection">
      <h2>انتخاب بیمه</h2>
      <div className="card-container">
        <SelectionCard
          title="بیمه شخص ثالث"
          isActive={true}
          onClick={handleThirdPartySelection}
        />

        <SelectionCard title="بیمه بدنه" isActive={false} />
      </div>
    </div>
  );
}
