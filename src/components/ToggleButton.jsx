import { useState } from "react";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  
  return (
    <div className="flex items-center gap-[4em]">
      <h2 className="font-semibold text-white w-full">{ isChecked ? 'Run' : 'Stop'}</h2>
      <label htmlFor="toggle" className="cursor-pointer w-full h-full ">
        <div
          className={`relative w-12 h-6 rounded-xl transition duration-300 ease-in-out ${
            isChecked ? "bg-green-400" : "bg-gray-300"
          }`}
        >
          <div
            className={`absolute w-6 h-6 bg-white border-2 border-gray-400 rounded-full transition-transform duration-300 ease-in-out transform ${
              isChecked ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
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
  );
};

export default ToggleButton;
