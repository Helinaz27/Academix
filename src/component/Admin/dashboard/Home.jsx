import React from "react";
// Import components
import Cards from "./Cards";
import CardForprogess from "./CardForprogess";
import EventTable from "./EventTable";
import AdminNav from "../AdminNav";
import AdminhNav from "../AdminhNav";

const Aminpage = () => {
  return (
    // Main container with flex layout, white background, and full screen height
    <>
      <div className="flex bg-white h-screen overflow-hidden">
        <AdminNav />
        <div className="w-full overflow-y-auto px-1 py-2">
          <div className="flex">
            <AdminhNav />
          </div>
          <Cards />
          <CardForprogess />
          <EventTable />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Aminpage;
