import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../Features/auth/authSlice";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import MegaphoneIcon from "@heroicons/react/24/outline/MegaphoneIcon";
function Reportpopup({ report, handleReport, postId }) {
  const Token = useSelector(selectCurrentToken);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(
          `http://54.237.124.13:8000/postapi/posts/${postId}`,
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        const postData = await response.json();
        setPost(postData);
        console.log("Post Report Top:", post);
      } catch (error) {
        console.error("Error fetching post details and comments:", error);
        // Handle fetch error
      }
    };

    fetchPostDetails(); // Call the function to fetch post details and comments
  }, [postId, Token]);
  console.log("Report details bottom:", post);
  return (
    <>
      <Dialog open={report} handler={handleReport}>
        {post && (
          <>
            <DialogHeader className=" items-center justify-center">
              <Typography color="" variant="h8">
                {post.post.content}
              </Typography>
            </DialogHeader>
            <DialogBody divider className="grid place-items-center gap-4">
              <Typography
                variant="h5"
                color="blue-gray"
                className=" text-center"
              >
                <MegaphoneIcon className="text-black fill-black item-center" />
                Your Attention is Required!
              </Typography>
              <Typography className="text-center font-normal">
                Before proceding to report please be sure that the post
                violaates our comminity guidelines such as not being respectful,
                not being relevant, or not appropriate Category.
              </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="blue-gray" onClick={handleReport}>
                close
              </Button>
              <Button variant="gradient" onClick={handleReport}>
                proced
              </Button>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </>
  );
}
export default Reportpopup;
