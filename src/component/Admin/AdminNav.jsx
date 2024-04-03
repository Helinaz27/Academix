import { useState } from "react";
import {
  CalendarIcon,
  ChevronLeftIcon,
  UserIcon,
  UsersIcon,
} from "@iconicicons/react";
import ArrowLeftEndOnRectangleIcon from "@heroicons/react/24/solid/ArrowLeftEndOnRectangleIcon";
import CalandarDaysIcon from "@heroicons/react/24/solid/CalendarDaysIcon";
import { MdSpaceDashboard } from "react-icons/md";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
const AdminNav = () => {
  const [open, setOpen] = useState(true);
  const active =
    "flex mt-64 rounded-md p-2 cursor-pointer bg-white hover:text-neutral-800 font-semibold leading-3  text-[#AFAFAF] text-sm items-center";
  const incatve = "";
  return (
    <nav>
      <div className="flex ">
        <div
          className={` ${
            open ? "w-60" : "w-20 "
          } bg-[#041643] h-screen p-5  pt-8 relative duration-300`}
        >
          <ChevronLeftIcon
            className={` bg-white absolute cursor-pointer right-1 top-9 w-7 border-white
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="flex gap-x-4 items-center place-content-center">
            <h1
              className={`text-white origin-left font-extrabold text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Academix
            </h1>
          </div>
          <ul className="pt-6">
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white">
              <MdSpaceDashboard class="h-6 w-6 text-[#AFAFAF]" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </li>
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-white text-[#AFAFAF] text-sm items-center">
              <AcademicCapIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Department
              </span>
            </li>
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-white text-[#AFAFAF] text-sm items-center">
              <UserIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Users
              </span>
            </li>
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-white text-[#AFAFAF] text-sm items-center">
              <UserGroupIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Staffs
              </span>
            </li>{" "}
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-white text-[#AFAFAF] text-sm items-center">
              <CalendarIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Academic Calandar
              </span>
            </li>
            <li className="flex  rounded-md p-2 cursor-pointer hover:bg-white text-[#AFAFAF] text-sm items-center">
              <CalandarDaysIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 justify-center ml-2`}
              >
                Events
              </span>
            </li>
            <li className="flex absolute bottom-0 mb-5 rounded-md p-2 cursor-pointer hover:bg-white hover:text-neutral-800 font-semibold leading-3  text-[#AFAFAF] text-sm items-center">
              <ArrowLeftEndOnRectangleIcon class="h-6 w-6 hover:text-blue-600 text-zinc-400 rotate-180" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 ml-2 `}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
        <div className="h-screen flex-1 p-7"></div>
      </div>
    </nav>
  );
};
export default AdminNav;
