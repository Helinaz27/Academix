import React from "react";
import Post from "./Post";
import tw from "tailwind-styled-components";

const TrendingPostsContainer = tw.div`
  mb-8
  flex
  flex-wrap
`;

const TrendingPostsTitle = tw.h2`
  text-2xl
  font-medium
  mb-4
  w-full
`;

const TrendingPostsList = tw.ul`
  list-none
  p-0
  flex
  flex-wrap
`;

const TrendingPost = ({ post }) => (
  <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2"> {/* Adjust width for different screen sizes */}
    <Post post={post} />
  </li>
);

const TrendingPosts = ({ posts }) => (
  <TrendingPostsContainer>
    <TrendingPostsTitle className="mt-8">Trending Posts</TrendingPostsTitle>
    <TrendingPostsList>
      {posts.map((post) => (
        <TrendingPost key={post.id} post={post} />
      ))}
    </TrendingPostsList>
  </TrendingPostsContainer>
);

export default TrendingPosts;
