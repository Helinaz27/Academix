import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";
import Courcetable from "./Courcetable";
import AdminNav from "../AdminNav";

function Departmentcard() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleOpen = (departmentId) => {
    setSelectedDepartmentId(departmentId);
    setOpen(true);
  };
  const Token = useSelector(selectCurrentToken);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(
          "http://54.237.124.13:8000/basicapp/departments",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setDepartments(data.department);
        } else {
          throw new Error("Failed to fetch departments");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        courcetableRef.current &&
        !courcetableRef.current.contains(event.target)
      ) {
        setOpen(false); // Close Courcetable
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col">
          {open && (
            <div ref={courcetableRef}>
              <Courcetable
                departmentId={selectedDepartmentId}
                handleOpen={handleOpen}
                open={open}
                isFavorite={isFavorite}
                handleIsFavorite={handleIsFavorite}
              />
            </div>
          )}
          {departments.map((department) => (
            <Card
              key={department.id}
              className="ml-3 mt-3 w-80 cursor-pointer"
              onClick={() => handleOpen(department.id)}
            >
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {department.name}
                </Typography>
                {/* <Typography>{department.overview}</Typography> */}
              </CardBody>
              <CardFooter className="pt-0">
                <Typography>
                  {department.head ? department.head : "Department Head"}
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
export default Departmentcard;
