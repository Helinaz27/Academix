const TrendingPosts = () => {
  return (
    <div className="flex flex-col p-10">
      <p className="text-[20px] font-extrabold p-5">Trending Posts</p>

      <div className="w-ful h-[230px] flex gap-10 p-5">
        <div className="w-full gird grid-cols-1  bg-[#C2D2F9] border-solid border-2 rounded-[30px] px-5 pt-24"></div>
        <div className="w-full gird grid-cols-1  bg-[#C2D2F9] border-solid border-2 rounded-[30px] px-5 pt-24"></div>
        <div className="w-full gird grid-cols-1  bg-[#C2D2F9] border-solid border-2 rounded-[30px] px-5 pt-24"></div>
      </div>
    </div>
  );
};

export default TrendingPosts;
