import React from "react";
import StudenthNav from "../StudenthNav";
import StudentNav from "../StudentNav";
import { Button } from "@material-tailwind/react";
import CreateClubRequest from "./CreateClubRequest";
const Club = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="flex bg-white h-screen overflow-hidden">
        <StudentNav />
        <div className="w-full overflow-y-auto px-1 py-2">
          <div className="flex">
            <StudenthNav />
          </div>
          <CreateClubRequest
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
          />
          <Button onClick={handleOpen}>Create Club</Button>
        </div>
      </div>
    </>
  );
};

export default Club;
