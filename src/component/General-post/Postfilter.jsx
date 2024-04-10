// import React from "react";
// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
// import {
//   Square3Stack3DIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
// } from "@heroicons/react/24/solid";
// import Posts from "./Posts";

// function Postfilter() {
//   const [activeTab, setActiveTab] = React.useState("html");

//   return (
//     <Tabs value="dashboard">
//       <TabsHeader>
//         {data.map(({ label, value, icon }) => (
//           <Tab key={value} value={value}>
//             <div className="flex items-center gap-2">
//               {React.createElement(icon, { className: "w-5 h-5" })}
//               {label}
//             </div>
//           </Tab>
//         ))}
//       </TabsHeader>
//       <TabsBody>
//         {data.map(({ value, desc }) => (
//           <TabPanel key={value} value={value}>
//             {desc}
//           </TabPanel>
//         ))}
//       </TabsBody>
//     </Tabs>
//   );
// }
// export default Postfilter;

import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  HashtagIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import Posts from "./Posts";

function Postfilter() {
  const data = [
    {
      label: "General",
      value: "General",
      icon: HashtagIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Clubs",
      value: "Clubs",
      icon: AcademicCapIcon,
      desc: <Posts />,
    },
    {
      label: "Events",
      value: "Events",
      icon: CalendarDaysIcon,
      desc: <Posts />,
    },
    {
      label: "Class",
      value: "Class",
      icon: BellIcon,
      desc: <Posts />,
    },
  ];
  return (
    <Tabs value="dashboard" className="mt-2">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-0">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
export default Postfilter;
