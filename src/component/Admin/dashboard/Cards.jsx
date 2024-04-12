import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";

function Cards() {
  const [studentCounts, setStudentCounts] = useState({
    first_year: 0,
    second_year: 0,
    third_year: 0,
    forth_year: 0,
    fifth_year: 0,
  });

  useEffect(() => {
    const fetchStudentCounts = async () => {
      try {
        const response = await axios.get(
          "http://54.237.124.13:8000/user/counts/",
          {
            headers: {
              Authorization: `Token fb8d756a0b5814f5620ec679633d2baa0882e483`,
            },
          }
        );
        setStudentCounts(response.data.data);
      } catch (error) {
        console.error("Error fetching student counts: ", error);
      }
    };

    fetchStudentCounts();
  }, []);

  return (
    <>
      <Card className="grid grid-cols-5 md:grid-cols-5 sm:grid-cols-1  ">
        <Card className="ml-5 mt-6 w-52 bg-[#C2D2F9] md:grid-cols-2 sm:grid-cols-1 rounded-xl w-55 h-32">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Freshman
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.first_year}
            </Typography>
          </CardBody>
        </Card>
        <Card className="ml-5 mt-6 w-52 bg-[#C2D2F9] md:grid-cols-2 sm:grid-cols-1 rounded-xl w-55 h-32">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Second Year
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.second_year}
            </Typography>
          </CardBody>
        </Card>
        <Card className="ml-5 mt-6 w-52 bg-[#C2D2F9] md:grid-cols-2 sm:grid-cols-1 rounded-xl w-55 h-32">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Third Year
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.third_year}
            </Typography>
          </CardBody>
        </Card>
        <Card className="ml-5 mt-6 w-52 bg-[#C2D2F9] md:grid-cols-2 sm:grid-cols-1 rounded-xl w-55 h-32">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Fourth Year
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.forth_year}
            </Typography>
          </CardBody>
        </Card>
        <Card className="ml-5 mt-6 w-52 bg-[#C2D2F9] md:grid-cols-2 sm:grid-cols-1 rounded-xl w-55 h-32">
          <CardBody className=" font-extrabold">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Fifth Year
            </Typography>
            <br />
            <Typography variant="h5" color="blue-gray" className="">
              {studentCounts.fifth_year}
            </Typography>
          </CardBody>
        </Card>
      </Card>
    </>
  );
}

export default Cards;
