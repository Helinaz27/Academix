<<<<<<< HEAD
//   return (
//     <div>
//       <div className="flex justify-between">
//         <h1 className="text-black font-serif font-bold text-2xl text-left mt-6 p-3 flex justify-start">
//           Users
//         </h1>
//         <div className="relative mt-11">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <FaSearch className="text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="px-10 py-2 text-xl font-serif border-[2px] h-[2.5rem] w-full rounded-lg border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="flex px-2 items-right mt-6 p-3">
//           <select className="border border-gray-300 bg-gray-100 rounded-md py-1 px-2">
//             <option value="student">Student</option>
//             <option value="Student Union">Student Union</option>
//             <option value="Representative">Representative</option>
//           </select>
//         </div>
//       </div>
//       {searchTerm && (
//         <div>
//           <div className="flex justify-between bg-gray-100 px-4 pt-5 pb-4 rounded-xl border border-gray-200  flex-1 m-2 p-6 ">
//             <div className="mt-3">
//               <table className="w-full text-gray-700 min-w-full divide-y divide-gray-200 ">
//                 <thead className="">
//                   <tr className="text-gray-400 text-left py-4">
//                     <th className="w-1/6">NAME</th>
//                     <th className="w-1/6">DEPARTMENT</th>
//                     <th className="w-1/6">ID NUMBER</th>
//                     <th className="w-1/6">GENDER</th>
//                     <th className="w-1/6">ROLE</th>
//                     <th className="w-1/6">PHONE NUMBER</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200  ">
//                   {filteredStudents.map((student) => (
//                     <tr
//                       key={student.id}
//                       className="text-gray-500 text-left py-4"
//                     >
//                       <td className="font-bold">{student.name}</td>
//                       <td>{student.department}</td>
//                       <td>{student.IdNumber}</td>
//                       <td>{student.Gender}</td>
//                       <td>{student.Role}</td>
//                       <td>{student.PhoneNumber}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* {!searchTerm && <UsersList />} */}
//     </div>
//   );
// };

// export default SearchHeaderforUsers;
import React from "react";
import StudentsData from "./StudentsData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AddUser from "./AddUser";
import {
  TrashIcon,
  UserIcon,
  UserPlusIcon,
  PencilIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Userinformation from "./Userinformation";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Students",
    value: "Students",
  },
  {
    label: "Reps",
    value: "Reps",
  },
  {
    label: "Studentuni",
    value: "Studentuni",
  },
];

const TABLE_HEAD = [
  "Name",
  "Department",
  "ID No",
  "Gender",
  "Role",
  "Phone Number",
  "",
];

const TABLE_ROWS = [
  {
    Id: 1,
    name: "oooo Student",
    email: "sample.student@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    ID_No: "ETS0000",
    Role: "Student",
    Gen: "M",
    Phone_No: "+251956561111",
  },
  {
    Id: 2,
    name: " Demeke Kebede",
    email: "kebede.demeke@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    ID_No: "ETS0000",
    Role: "Student",
    Gen: "F",
    Phone_No: "+251956561111",
  },
  {
    Id: 3,
    name: "Sample Sample",
    email: "sample.sample@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Applied Science",
    ID_No: "ETS0000",
    Role: "Student",
    Gen: "M",
    Phone_No: "+251956561111",
  },
  {
    Id: 4,
    name: "Simple",
    email: "sample.simple@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    ID_No: "ETS0000",
    Role: "Student",
    Gen: "F",
    Phone_No: "+251956561111",
  },
  {
    Id: 5,
    name: "Kebede damtew",
    email: "kebede.damtew@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    ID_No: "ETS0000",
    Role: "Student",
    Gen: "M",
    Phone_No: "+251956561111",
  },
];

const SearchHeaderforUsers = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const toggleOpen = () => setOpen((cur) => !cur);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = TABLE_ROWS.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [openadd, setOpenadd] = React.useState(false);
  const handleOpen = () => setOpenadd((cur) => !cur);

  return (
    <>
      <AddUser handleOpen={handleOpen} openadd={openadd} />
      <Userinformation
        openDrawer={openDrawer}
        open={open}
        closeDrawer={closeDrawer}
      />
      <Card className="flex h-full w-full mt-5">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Students List
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Student
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0 ml-3">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                    Role,
                    name,
                    email,
                    Department,
                    Subdepart,
                    ID_No,
                    Phone_No,
                    Gen,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-2"
                    : "p-2 border-b border-blue-gray-50";

                  return (
                   <>
                   {!searchTerm && (
                      <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <UserIcon className=" size-8 text-black" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {Department}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {Subdepart}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ID_No}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Gen}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Role}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Phone_No}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="View">
                          <IconButton variant="text" onClick={openDrawer}>
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete">
                          <IconButton variant="text">
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                    )}
                    
                    </>
                    );
                }
              )}
              {filteredStudents.map(
                (
                  {
                    Role,
                    name,
                    email,
                    Department,
                    Subdepart,
                    ID_No,
                    Phone_No,
                    Gen,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-2"
                    : "p-2 border-b border-blue-gray-50";

                  return (
                   <>
                   {searchTerm && (
                      <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <UserIcon className=" size-8 text-black" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {Department}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {Subdepart}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ID_No}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Gen}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Role}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Phone_No}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="View">
                          <IconButton variant="text" onClick={openDrawer}>
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete">
                          <IconButton variant="text">
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                    )}
                    
                    </>
                    );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};
export default SearchHeaderforUsers;
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AddUser from "./AddUser";
import {
  TrashIcon,
  UserIcon,
  UserPlusIcon,
  PencilIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Userinformation from "./Userinformation";



const SearchHeaderforUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://54.237.124.13:8000/user/users/", {
          headers: {
            Authorization: "Token fb8d756a0b5814f5620ec679633d2baa0882e483",
          },
        });
        setStudents(response.data.students);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

 

  const filteredStudents = students.filter((student) =>
    `${student.username}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AddUser />
      <Userinformation />
      <Card className="flex h-full w-full mt-5">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Students List
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add
                Student
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                <Tab>All</Tab>
                <Tab>Students</Tab>
                <Tab>Reps</Tab>
                <Tab>Studentuni</Tab>
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0 ml-3">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    User Name
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100  bg-blue-gray-50/50 p-4">
                  
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Name
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Email
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Phone Number
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Role
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small" 
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Actions
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {searchTerm && (
                <div>
              {filteredStudents.map((student) => (
                <tr key={student.username}>
                  <td className="border-b border-blue-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <UserIcon className="size-8 text-black" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {student.username}
                          <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        ></Typography>
                          {`${student.first_name} ${student.last_name}`}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {student.email}
                        </Typography>
                      </div>#WYZH#%
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.phone_number}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.student.student_id}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.is_staff ? "Staff" : "Student"}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Tooltip content="View">
                      <IconButton>
                        <EyeIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Edit">
                      <IconButton>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <IconButton>
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
              </div>
              )}
              {!searchTerm && (
                <div>
              {filteredStudents.map((student) => (
                <tr key={student.username}>
                  <td className="border-b border-blue-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <UserIcon className="size-8 text-black" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {`${student.first_name} ${student.last_name}`}
                          {student.username}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {student.email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.phone_number}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.student.student_id}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.is_staff ? "Staff" : "Student"}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Tooltip content="View">
                      <IconButton>
                        <EyeIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Edit">
                      <IconButton>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <IconButton>
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
              </div>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default SearchHeaderforUsers;
>>>>>>> 06e312e43af3e6afac7b04263f5294469a6ea77b
