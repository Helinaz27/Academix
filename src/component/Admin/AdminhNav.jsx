import React from "react";
import { useSelector } from "react-redux";

import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { BellIcon, PlusCircleIcon } from "@iconicicons/react";
import Test from "./poster/Test";
import MegaphoneIcon from "@heroicons/react/24/outline/MegaphoneIcon";
// import MessageDialog from "./poster/MessageDialog";
import Resource from "./poster/Resource";
import { selectCurrentUser } from "../../Features/auth/authSlice";

const AdminhNav = () => {
  const LoggedinUser = useSelector(selectCurrentUser);
  console.log("First Name", LoggedinUser.first_name);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [openA, setOpenA] = React.useState(false);
  const handleOpenA = () => setOpenA(!openA);

  return (
    <>
      <Test open={open} handleOpen={handleOpen} />
      <Resource openA={openA} handleOpenA={handleOpenA} />
      {/* <MessageDialog openA={openA} handleOpenA={handleOpenA} /> */}
      <div className="flex-1 w-full">
        <Navbar className="mx-auto w-full px-6 py-3">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography variant="h6" className="mr-4 cursor-pointer py-1.5">
              AASTU Admin
            </Typography>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <IconButton onClick={handleOpenA}>
                  <MegaphoneIcon className="text-white" />
                </IconButton>

                <IconButton onClick={handleOpen}>
                  <PlusCircleIcon className="text-white" />
                </IconButton>

                <IconButton {...(LoggedinUser?.is_staff ? "hidden" : "")}>
                  <BellIcon className="text-white" />
                </IconButton>
                <div>
                  <Typography variant="h6">
                    {LoggedinUser.first_name} {LoggedinUser.last_name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-right"
                  >
                    {LoggedinUser?.is_staff ? "Admin" : "User"}
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
    </>
  );
};

export default AdminhNav;