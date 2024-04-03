import React from "react";
// Import components
import Cards from "./Cards";
import CardForprogess from "./CardForprogess";
import EventTable from "./EventTable";

const Aminpage = () => {
  return (
    // Main container with flex layout, white background, and full screen height
    <div className="flex bg-white h-screen overflow-hidden">
      {/* Navigation component (commented out for now) */}
      {/* <AdminNav /> */}

      {/* Content container with full width, vertical scrolling, and padding */}
      <div className="w-full overflow-y-auto px-4 py-2">
        {/* Section title */}
        <div className="">
          <h2 className="text-xl font-bold ">Dashboard</h2>
        </div>

        {/* Card components */}
        <Cards />
        <CardForprogess />

        {/* Event table component */}
        <EventTable />

        {/* Additional spacing for readability */}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Aminpage;
