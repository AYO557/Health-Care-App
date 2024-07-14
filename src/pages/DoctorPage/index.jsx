import StatMenu from "../../components/authCom/StatMenu";
import HealthDetailsForm from "../../components/authCom/HealthDetailsForm";

const DoctorPage = () => {
  return (
    <>
      <StatMenu text={"Back to Dashboard"} />
      <h2 className="font-bold text-3xl py-5">Book Appointment</h2>
      <div className="flex flex-col sm:flex-row gap-3 p-2">
        <HealthDetailsForm />
      </div>
    </>
  );
};

export default DoctorPage;
