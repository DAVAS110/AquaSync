import { useState } from "react";

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-center m-14 mb-0 w-full">
      <div>
        <label htmlFor="toggle" className="cursor-pointer w-full h-full">
          <div
            className={`flex items-center justify-center relative w-full h-[10em] rounded-xl transition duration-300 ease-in-out ${
              isChecked ? "bg-green-400" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute w-[10em] h-6 bg-white border-2 border-gray-400 rounded-full transition-transform duration-300 ease-in-out transform ${
                isChecked ? "translate-x-[0em]" : "translate-x-[-1em]"
              }`}
            >
              sdajs
            </div>
            <h1 className="text-[#157CC4] text-[4em] font-abc font-semibold text-center">AQUA</h1>
            <h1 className="text-[#157CC4] text-[4em] font-abc font-semibold m-5 text-center">SYNC</h1>
          </div>
        </label>
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
      </div>
    </div>
  );
};

export default Home;
