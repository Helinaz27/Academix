import React from "react";
import Post from "./Post";

const TrendingPosts = ({ posts }) => {
  return(
    <div className="">
      <h3 className="text-[20px] font-extrabold mb-4">Trending Posts</h3>
    <div className="grid grid-cols-3 mb-4 gap-20 overflow-x-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
    </div>
  )
}


export default TrendingPosts;
