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
import MessageDialog from "./poster/MessageDialog";
import MegaphoneIcon from "@heroicons/react/24/outline/MegaphoneIcon";
import { selectCurrentUser } from "../../Features/auth/authSlice";
const StudenthNav = () => {
  const LoggedinUser = useSelector(selectCurrentUser);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [openA, setOpenA] = React.useState(false);
  const handleOpenA = () => setOpenA(!openA);

  return (
    <>
      <Test open={open} handleOpen={handleOpen} />
      <MessageDialog openA={openA} handleOpenA={handleOpenA} />
      <div className="flex-1 w-full">
        <Navbar className="mx-auto w-full px-6 py-3">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography variant="h6" className="mr-4 cursor-pointer py-1.5">
              AASTU Student
            </Typography>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <IconButton onClick={handleOpenA}>
                  <MegaphoneIcon className="text-white" />
                </IconButton>

                <IconButton
                  onClick={handleOpen}
                  hidden={!LoggedinUser?.is_staff ? false : true}
                >
                  <PlusCircleIcon className="text-white fill-white-400" />
                </IconButton>
                <div>
                  <Typography variant="h6">
                    {LoggedinUser.first_name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-right"
                  >
                    {LoggedinUser.student.is_rep ? "Rep" : "Student"}
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

export default StudenthNav;
