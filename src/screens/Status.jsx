import EatonLogo from "../assets/img/EatonLogo.png";
import ToggleButton from "../components/ToggleButton";

const Status = () => {
  return (
    <div className="m-14 mb-0">
      <img className="object-cover w-40 h-30" src={EatonLogo} alt="" />
      <div className="flex flex-col gap-7 mt-10">
        <div className="bg-[#157CC4] w-60 h-[7em] rounded-xl">
          <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-semibold text-white">PLC status</h1>
            <ToggleButton />
          </div>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div className="bg-[#157CC4] w-[33em] h-[15em] rounded-xl">
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-white">
                Valves status
              </h1>
            </div>
          </div>
          <div className="bg-[#157CC4] w-[33em] h-[15em] rounded-xl">
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-white">Tank Status</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#157CC4] w-full h-[13em] rounded-xl">
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-white">
              Water purity Status
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
