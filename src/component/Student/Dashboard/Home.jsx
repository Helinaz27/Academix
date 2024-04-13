import React from "react";
import StudentDashboard from "./Studentdashboard";

const Home = () => {
  return (
    <div className="flex bg-white h-screen overflow-hidden">
      <AdminNav />
      <div className="w-full overflow-y-auto px-1 py-2">
        <div className="flex">
          <AdminhNav />
        </div>
        <StudentDashboard />
      </div>
    </div>
  );
};

export default Home;
