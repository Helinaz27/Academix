import React, { useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "./../../../Features/auth/authSlice";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";

function MessageDialog({ handleOpenA, openA }) {
  const Token = useSelector(selectCurrentToken);
  const LogedinUser = useSelector(selectCurrentUser);

  const [formData, setFormData] = useState({
    description: "",
    content: "", // Fix: Added content to state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Form Data:", formData);
    const id = LogedinUser.id;
    try {
      const response = await axios.post(
        "http://54.237.124.13:8000/request/create",
        {
          description: formData.description,
          student: id,
          post: {
            content: formData.content,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Token}`, // Use the actual token variable here
          },
        }
      );
      console.log(response.data); // handle successful response
    } catch (error) {
      console.error("Error occurred:", error); // handle error
    }
  };

  return (
    <Dialog open={openA} size="xs" handler={handleOpenA}>
      {/* Add your content here */}
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          <Typography className="mb-1" variant="h4">
            Post Request
          </Typography>
        </DialogHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5"
          onClick={handleOpenA}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <DialogBody>
        <div className="grid gap-2">
          <Typography className="-mb-1" color="blue-gray" variant="h6">
            Description
          </Typography>
          <Input
            label="Description" // Fix: Changed label to Description
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <Typography className="-mb-1" color="blue-gray" variant="h6">
            Content
          </Typography>
          <Input
            label="Content" // Fix: Changed label to Content
            name="content" // Fix: Changed name to content
            value={formData.content}
            onChange={handleChange}
          />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="text" color="gray" onClick={handleOpenA}>
          Cancel
        </Button>
        <Button variant="gradient" color="gray" onClick={handleSubmit}>
          Request An Ad
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default MessageDialog;
