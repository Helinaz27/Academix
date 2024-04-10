import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import ChatBubbleOvalLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleOvalLeftEllipsisIcon";
import ExclamationCircleIcon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import Postdetail from "./Postdetail";
import Reportpopup from "./Reportpopup";

function Posts() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  const [report, Setreport] = React.useState(false);

  const handleReport = () => Setreport(!report);
  return (
    <>
      <Reportpopup report={report} handleReport={handleReport} />
      <Postdetail
        open={open}
        handleOpen={handleOpen}
        isFavorite={isFavorite}
        handleIsFavorite={handleIsFavorite}
      />
      <div className="grid grid-cols justify-center items-center h-auto max-h-full mt-2">
        <Card className="w-full max-w-[35rem] mb-5">
          <div floated={false} color="" className="bg-white ">
            <div className="flex items-center gap-2 mt-3 ml-2 mb-2">
              <IconButton className="rounded-full">
                <UserIcon className="h-6 w-6 text-white" />
              </IconButton>
              <div>
                <Typography variant="h6">Abebe Kebede</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Student President
                </Typography>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
            class="object-cover object-center w-full rounded-lg h-96"
          />
          <div class="block mt-1 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
            <div className="flex float-right mt-5">
              <IconButton
                size="sm"
                color=""
                variant="text"
                className="rounded-full"
              >
                <BookmarkIcon class="h-6 w-6 float-right" />
              </IconButton>
            </div>
            <div className="flex mt-5">
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="rounded-full"
              >
                <HeartIcon class="h-6 w-6 float-left" />
              </IconButton>
              <IconButton
                size="sm"
                color=""
                variant="text"
                onClick={handleOpen}
                className="rounded-full"
              >
                <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6 float-left" />
              </IconButton>
              <IconButton
                size="sm"
                color=""
                variant="text"
                className="rounded-full"
                onClick={handleReport}
              >
                <ExclamationCircleIcon class="h-6 w-6 float-left" />
              </IconButton>
            </div>
            <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
              1,000 Likes
            </div>
            <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
              CaptionCaptionCaptionCaptionCaptionCaption
            </div>
          </div>
          <div className="flex w-full flex-row items-center gap-2 border border-gray-900/10 bg-gray-900/5 p-2 mt-1 ">
            <div className="flex">
              <IconButton variant="text" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </IconButton>
            </div>
            <Textarea
              rows={1}
              resize={true}
              placeholder="Your Comment"
              className="min-h-full !border-0 focus:border-transparent"
              containerProps={{
                className: "grid h-full",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div>
              <IconButton variant="text" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
        </Card>
        <Card className="w-full max-w-[35rem] mb-5">
          <div floated={false} color="" className="bg-white ">
            <div className="flex items-center gap-2 mt-3 ml-2 mb-2">
              <IconButton className="rounded-full">
                <UserIcon className="h-6 w-6 text-white" />
              </IconButton>
              <div>
                <Typography variant="h6">Abebe Kebede</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Student President
                </Typography>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
            class="object-cover object-center w-full rounded-lg h-96"
          />
          <div class="block mt-1 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
            <div className="flex float-right mt-5">
              <IconButton
                size="sm"
                color=""
                variant="text"
                className="rounded-full"
              >
                <BookmarkIcon class="h-6 w-6 float-right" />
              </IconButton>
            </div>
            <div className="flex mt-5">
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="rounded-full"
              >
                <HeartIcon class="h-6 w-6 float-left" />
              </IconButton>
              <IconButton
                size="sm"
                color=""
                variant="text"
                onClick={handleOpen}
                className="rounded-full"
              >
                <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6 float-left" />
              </IconButton>
              <IconButton
                size="sm"
                color=""
                variant="text"
                className="rounded-full"
                onClick={handleReport}
              >
                <ExclamationCircleIcon class="h-6 w-6 float-left" />
              </IconButton>
            </div>
            <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
              1,000 Likes
            </div>
            <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
              CaptionCaptionCaptionCaptionCaptionCaption
            </div>
          </div>
          <div className="flex w-full flex-row items-center gap-2 border border-gray-900/10 bg-gray-900/5 p-2 mt-1 ">
            <div className="flex">
              <IconButton variant="text" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </IconButton>
            </div>
            <Textarea
              rows={1}
              resize={true}
              placeholder="Your Comment"
              className="min-h-full !border-0 focus:border-transparent"
              containerProps={{
                className: "grid h-full",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div>
              <IconButton variant="text" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
export default Posts;
