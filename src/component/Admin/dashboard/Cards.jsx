import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function Cards() {
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
              1500
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
              1500
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
              1500
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
              1500
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
              1500
            </Typography>
          </CardBody>
        </Card>
      </Card>
    </>
  );
}

export default Cards;
