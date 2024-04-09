import React from "react";
import tw from "tailwind-styled-components";

const PostContainer = tw.div`
  bg-white
  shadow-md
  rounded-lg
  p-4
  mb-4
`;

const PostTitle = tw.h3`
  text-xl
  font-medium
  mb-2
`;

const PostContent = tw.p`
  text-gray-600
`;

const Post = ({ post }) => (
  <PostContainer>
    <PostTitle>{post.title}</PostTitle>
    <PostContent>{post.content}</PostContent>
  </PostContainer>
);

export default Post;