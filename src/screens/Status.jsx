import EatonLogo from "../assets/img/EatonLogo.png";

import FullTank from "../assets/img/Tanks/FullTank.png";
import EmptyTank from "../assets/img/Tanks/EmptyTank.png";

import CleanWater from "../assets/img/TurbidSensor/CleanWater.png";
//import MediumWater from "../assets/img/TurbidSensor/MediumWater.png";
import TurbidWater from "../assets/img/TurbidSensor/TurbidWater.png";

import OpenValve from "../assets/img/Valves/OpenValve.png";
import CloseValve from "../assets/img/Valves/CloseValve.png";

import ToggleButton from "../components/ToggleButton";

const Status = () => {
  const Status = 1;

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
              <h1 className="text-2xl font-semibold text-white">Tank Status</h1>
              <div className="flex justify-end p-4 h-full w-full">
                <div className="flex justify-center w-full h-full gap-20">
                  {Status == 1 ? (
                    <img src={FullTank} className="w-[10em] h-[10em]" />
                  ) : (
                    <img src={EmptyTank} className="w-[10em] h-[10em]" />
                  )}
                  <div className="mt-10">
                    {Status == 1 ? (
                      <h2 className="text-2xl font-semibold text-white">
                        Tank is full
                      </h2>
                    ) : (
                      <h2>Tank is Empty</h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#157CC4] w-[33em] h-[15em] rounded-xl">
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-white">
              Water purity Status
              </h1>
              <div className="flex justify-end p-4 h-full w-full">
                <div className="flex justify-center w-full h-full gap-20">
                  {Status == 1 ? (
                    <img src={CleanWater} className="w-[4em] h-[9em]" />
                  ) : (
                    <img src={TurbidWater} className="w-[4em] h-[9em]" />
                  )}
                  <div className="mt-10">
                    {Status == 1 ? (
                      <h2 className="text-2xl font-semibold text-white">
                        Water is Clean
                      </h2>
                    ) : (
                      <h2 className="text-2xl font-semibold text-white">
                        Water is Tainted
                      </h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#157CC4] w-full h-full rounded-xl mb-5">
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-white">Valves status</h1>
            <div className="flex items-center justify-center gap-[5em]">
              <div className="flex flex-col justify-center gap-3">
                <h2 className="text-center text-[1.2em] font-semibold text-white">
                  Tank Valve
                </h2>
                {Status == 1 ? (
                  <img src={OpenValve} className="w-[10em] h-[7em]" />
                ) : (
                  <img src={CloseValve} className="w-[10em] h-[7em]" />
                )}
                <div className="flex justify-center gap-3">
                  <button className="bg-white p-1 pl-2 pr-2 rounded-md text-[#157CC4] font-semibold text-[1em] hover:bg-slate-300">
                    On
                  </button>
                  <button className="bg-white p-1 pl-2 pr-2 rounded-md text-[#157CC4] font-semibold text-[1em] hover:bg-slate-300">
                    Off
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <h2 className="text-center text-[1.2em] font-semibold text-white">
                  Alternate Valve
                </h2>
                {!Status == 1 ? (
                  <img src={OpenValve} className="w-[10em] h-[7em]" />
                ) : (
                  <img src={CloseValve} className="w-[10em] h-[7em]" />
                )}
                <div className="flex justify-center gap-3">
                  <button className="bg-white p-1 pl-2 pr-2 rounded-md text-[#157CC4] font-semibold text-[1em] hover:bg-slate-300">
                    On
                  </button>
                  <button className="bg-white p-1 pl-2 pr-2 rounded-md text-[#157CC4] font-semibold text-[1em] hover:bg-slate-300">
                    Off
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <h2 className="text-center text-[1.2em] font-semibold text-white">
                  Potable Water Valve
                </h2>
                {Status == 1 ? (
                  <img src={OpenValve} className="w-[10em] h-[7em]" />
                ) : (
                  <img src={CloseValve} className="w-[10em] h-[7em]" />
                )}
                <div className="flex justify-center gap-3">
                  <button className="bg-white p-1 pl-2 pr-2 rounded-md text-[#157CC4] font-semibold text-[1em] hover:bg-slate-300">
                    On
                  </button>
                  <button className="bg-white p-1 pl-2 pr-2 rounded-md text-[#157CC4] font-semibold text-[1em] hover:bg-slate-300">
                    Off
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
