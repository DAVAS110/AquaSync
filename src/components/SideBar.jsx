import { useState } from "react";

import { NavLink } from "react-router-dom";

import { BiMenu, BiLeftArrowAlt, BiMessageSquareDetail } from "react-icons/bi";
import { TbSmartHome, TbInfoSquareRoundedFilled } from "react-icons/tb";
import { SiStatuspal } from "react-icons/si";
import { LuSettings } from "react-icons/lu";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    {
      title: "Home",
      src: (
        <TbSmartHome
          className="group-hover:text-[#157CC4]"
          size={25}
        />
      ),
      gap: true,
      href: "/",
    },
    {
      title: "Status",
      src: (
        <SiStatuspal
          className="group-hover:text-[#157CC4]"
          size={25}
        />
      ),
      href: "/status",
    },
    {
      title: "Usage Information",
      src: (
        <TbInfoSquareRoundedFilled
          className="group-hover:text-[#157CC4] "
          size={25}
        />
      ),
      href: "/usageInformation",
    },

    {
      title: "Settings",
      src: (
        <LuSettings
          className="group-hover:text-[#157CC4] "
          size={25}
        />
      ),
      gap: true,
      href: "/settings",
    },
    {
      title: "Message",
      src: (
        <BiMessageSquareDetail
          className="group-hover:text-[#157CC4]"
          size={25}
        />
      ),
      href: "/message",
    },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#157CC4] h-full p-5 pt-8 relative duration-300 mb-[6em]`}
      >
        <BiLeftArrowAlt
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           rounded-full bg-[#157CC4] text-white ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          size={30}
        />
        <div className="flex gap-x-4 items-center">
          <div className="flex items-center h-full">
            <BiMenu
              className={`cursor-pointer duration-500 text-white m-2  ${
                open && "rotate-[360deg]"
              }`}
              size={35}
            />
            <h1
              className={`text-white origin-left font-semibold text-4xl duration-200 font-abc mt-1 ${
                !open && "scale-0"
              }`}
            >
              Menu
            </h1>
          </div>
        </div>
        <ul className="pt-6 flex flex-col">
          {Menus.map((Menu, index) => (
            <NavLink
              to={Menu.href}
              key={index}
              className={({ isActive }) => {
                return `
                  group flex rounded-md p-2 cursor-pointer hover:bg-[#fff] text-base items-center gap-x-2 font-abc
                  ${Menu.gap ? "mt-[9.5em]" : "mt-1"}
                  ${index === 0 && "bg-light-white"} 
                  ${isActive ? "text-[#157CC4] bg-white" : "bg-none text-white"}
                `;
              }}
            >
              {Menu.src}
              <span
                className={`
                    ${
                      !open && "hidden"
                    } origin-left duration-200 font-medium group-hover:text-[#157CC4] 
                  `}
              >
                {Menu.title}
              </span>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
