import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  IconButton,
  Typography,
  Option,
} from "@material-tailwind/react";

function Courcetable({ handleIsFavorite, handleOpen, open, isFavorite }) {
  return (
    <>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Electrical Department
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                Engneering
              </Typography>
            </div>
          </div>
          <div className="flex w-10 flex-col float-right"></div>
          <div className="flex items-center gap-2">
            <Select size="md" label="Select Year">
              <Option>I</Option>
              <Option>II</Option>
              <Option>III</Option>
              <Option>IV</Option>
              <Option>V</Option>
            </Select>
          </div>
        </DialogHeader>
        <DialogBody></DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Number Of Cources
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                10
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Total Credit Hours
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                18
              </Typography>
            </div>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default Courcetable;
