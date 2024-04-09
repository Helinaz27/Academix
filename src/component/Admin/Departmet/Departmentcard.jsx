import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";
import Courcetable from "./Courcetable";
function Departmentcard() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
  return (
    <div className="w-full">
      <Courcetable
        handleOpen={handleOpen}
        handleIsFavorite={handleIsFavorite}
        open={open}
        isFavorite={isFavorite}
      />
      <Card className="ml-3 mt-3 w-80 cursor-pointer" onClick={handleOpen}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Electrical Department
          </Typography>
          <Typography>Department</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography>Department Head</Typography>
        </CardFooter>
      </Card>
      <Card className="ml-3 mt-3 w-80 cursor-pointer" onClick={handleOpen}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Electrical Department
          </Typography>
          <Typography>Department</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography>Department Head</Typography>
        </CardFooter>
      </Card>{" "}
      <Card className="ml-3 mt-3 w-80 cursor-pointer" onClick={handleOpen}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Electrical Department
          </Typography>
          <Typography>Department</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography>Department Head</Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Departmentcard;
