import React from "react";
import StudentNav from "../StudentNav";
import StudenthNav from "../StudenthNav";

const Profile = () => {
  return (
    <div className="flex bg-white h-screen overflow-hidden">
      <StudentNav />
      <div className="w-full overflow-y-auto px-1 py-2">
        <div className="flex">
          <StudenthNav />
        </div>
        Profile Page
      </div>
    </div>
  );
};

export default Profile;
