import AppointmentsForm from // RecommendationsForm,
"../../components/AppointmentsForm";
import StatMenu from "../../components/authCom/StatMenu";

const App = () => {
  return (
    <>
      <StatMenu text={"Back to Dashboard"} />
      <h2 className="font-bold text-3xl py-5">Get a Recommendation</h2>
      <div className="flex flex-col sm:flex-col gap-3 md:p-2">
        <AppointmentsForm />
        {/* <RecommendationsForm /> */}
      </div>
    </>
  );
};

export default App;
