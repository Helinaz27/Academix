import { useState } from "react";
import {
  BellIcon,
  HashtagIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@iconicicons/react";
import ArrowLeftEndOnRectangleIcon from "@heroicons/react/24/solid/ArrowLeftEndOnRectangleIcon";
import CalandarDaysIcon from "@heroicons/react/24/solid/CalendarDaysIcon";
import { MdSpaceDashboard } from "react-icons/md";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
const AdminNav = () => {
  return (
    <nav>
      <div className="flex ">
        <div
          className={` ${
            open ? "w-60 h-full" : "w-20 h-full"
          } bg-[#041643] h-screen p-5  pt-8 relative duration-300`}
        >
          <ChevronLeftIcon
            className={` bg-white absolute cursor-pointer right-1 top-9 w-7 border-white
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="flex gap-x-4 items-center place-content-center">
            <h1
              className={`text-white origin-left font-extrabold text-xl duration-200 font-sans ${
                !open && "scale-0"
              }`}
            >
              ACADEMIX
            </h1>
          </div>
          <ul className="pt-6">
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
            
            >
              <MdSpaceDashboard class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Dashboard
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
             
            >
              <AcademicCapIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Department
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
            
            >
              <UserIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Users
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => handlePage("staff")}
            >
              <UserGroupIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Staff
              </span>
            </li>{" "}
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              
            >
              <HashtagIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                General Post
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
             
            >
              <CalandarDaysIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Event
              </span>
            </li>
            <li className="flex absolute bottom-0 mb-5 rounded-md p-2 cursor-pointer hover:bg-white hover:text-neutral-800 font-semibold leading-3  text-[#AFAFAF] text-sm items-center">
              <ArrowLeftEndOnRectangleIcon class="h-6 w-6 hover:text-blue-600 text-zinc-400 rotate-180" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
        <div className="h-screen flex-1 w-full">
          <Navbar className="mx-auto w-full px-6 py-3">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Typography variant="h6" className="mr-4 cursor-pointer py-1.5">
                AASTU Admin
              </Typography>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ></IconButton>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <IconButton>
                    <BellIcon className="text-white" />
                  </IconButton>
                  <div>
                    <Typography variant="h6">Abebe Bekele</Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal text-right"
                    >
                      Admin
                    </Typography>
                  </div>
                  <Avatar
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </Navbar> 
       </div>
      </div>
    </nav>
  );
};
export default AdminNav;
