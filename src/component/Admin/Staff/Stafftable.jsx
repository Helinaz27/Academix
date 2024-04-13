import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AddStaff from "./AddStaff";
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
import Staffinformation from "./Staffinformation";

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
    Id: 5,
    name: "kebebu damtew",
    email: "kebede.damtew@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    Offno: "B74009",
    Role: "Asistant Prof",
    Gen: "Female",
    Phone_No: "+251956561111",
  },
  {
    Id: 5,
    name: "Kebede Kebebu",
    email: "kebede.Kebebu@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    Offno: "B60005",
    Role: "Freshman coordinator",
    Gen: "M",
    Phone_No: "+251956561111",
  },
  {
    Id: 5,
    name: "kefyalew demlew",
    email: "kebede.demlew@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    Offno: "B76008",
    Role: "Professor",
    Gen: "M",
    Phone_No: "+251956561111",
  },
  {
    Id: 5,
    name: "Kebede damtew",
    email: "kebede.damtew@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    Offno: "B80404",
    Role: "Professor",
    Gen: "M",
    Phone_No: "+251956561111",
  },
  {
    Id: 5,
    name: "Kebede damtew",
    email: "kebede.damtew@aastudent.edu.et",
    Department: "Electrical Department",
    Subdepart: "Engneering",
    Offno: "B80404",
    Role: "Professor",
    Gen: "M",
    Phone_No: "+251956561111",
  },
];

const SearchHeaderforUsers = () => {
  const Token = useSelector(selectCurrentToken);
  const [searchTerm, setSearchTerm] = useState("");
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://54.237.124.13:8000/user/users/staff",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setAdmins(response.data.admin);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching admins:", error);
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  const filteredAdmins = admins.filter((admin) =>
    `${admin.username}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Staffinformation
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        open={open}
      />
      <Card className="flex h-full w-full mt-5">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Staff List
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Staff
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row float-right">
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
                    Offno,
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
                          {Offno}
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
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {admin.phone_number}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Tooltip content="View">
                      <IconButton onClick={() => handleView(admin)}>
                        <EyeIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <IconButton onClick={() => handleDelete(admin.id)}>
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};
export default SearchHeaderforUsers;
