import StatMenu from "../../components/authCom/StatMenu";
import { IoSettings } from "react-icons/io5";

const SettingsPage = () => {
  return (
    <div className="sm:h-[75vh] h-[80vh]">
      <StatMenu text={"Back to Dashboard"} />
      <h2 className="font-bold text-3xl py-5">Settings</h2>
      <div className="p-4 bg-blue-200 rounded-lg flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-1">
          <IoSettings size={30} color="#030346" />
          <h1 className="text-2xl text-[#030346] font-bold">Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
