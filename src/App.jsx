import { useState } from "react";

import { BiMenu, BiLeftArrowAlt, BiMessageSquareDetail } from "react-icons/bi";
import { TbSmartHome, TbInfoSquareRoundedFilled } from "react-icons/tb";
import { SiStatuspal } from "react-icons/si";
import { LuSettings } from "react-icons/lu";

const App = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", src: <TbSmartHome className="text-white group-hover:text-[#157CC4]" size={25}/>, gap: true, },
    { title: "Status", src: <SiStatuspal className="text-white group-hover:text-[#157CC4]" size={25} /> },
    {
      title: "Usage Information",
      src: <TbInfoSquareRoundedFilled className="text-white group-hover:text-[#157CC4]" size={25} />,
    },

    {
      title: "Setting",
      src: <LuSettings className="text-white group-hover:text-[#157CC4]" size={25} />,
      gap: true,
    },
    {
      title: "Message ",
      src: <BiMessageSquareDetail className="text-white group-hover:text-[#157CC4]" size={25} />,
    },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#157CC4] h-screen p-5 pt-8 relative duration-300`}
      >
        <BiLeftArrowAlt
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           rounded-full bg-[#157CC4] text-white ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          size={30}
        />
        <div className="flex gap-x-4 items-center">
          <div className="flex items-center">
            <BiMenu
              className={`cursor-pointer duration-500 text-white m-1 mt-2 ${
                open && "rotate-[360deg]"
              }`}
              size={35}
            />
            <h1
              className={`text-white origin-left font-medium text-3xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Menu
            </h1>
          </div>
        </div>
        <ul className="pt-6 flex flex-col">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`group flex rounded-md p-2 cursor-pointer hover:bg-[#fff] text-gray-300 text-sm items-center gap-x-2 
              ${Menu.gap ? "mt-[15em] " : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.src}
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-white font-medium group-hover:text-[#157CC4]`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default App;
