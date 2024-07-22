import HealthDetailsForm from "../../components/authCom/HealthDetailsForm";
import StatMenu from "../../components/authCom/StatMenu";
import Appointments from "../appointmentsPage";

const App = () => {
  return (
    <>
      <StatMenu text={"Back to Dashboard"} />
      <h2 className="font-bold text-3xl py-5">Get a Recommendation</h2>
      <div className="flex flex-col sm:flex-col gap-3 md:p-2">
        <HealthDetailsForm />
        <Appointments />
      </div>
    </>
  );
};

export default App;
