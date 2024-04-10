
// PostService.js

// Dummy data for posts
const dummyPosts = [
    { id: 1, title: "Post 1", content: "Content of Post 1 dfhgbhfdghfghjfjdfkjbfkbgbshk" },
    { id: 2, title: "Post 2", content: "Content of Post 2dfgdfgdfgsf" },
    { id: 3, title: "Post 3", content: "Content of Post fgregvregvrsegvrsegvfwe" },
    // Add more dummy posts as needed
  ];
  
  const PostService = {
    // Simulate an asynchronous fetch of posts
    getLatestPosts: async () => {
      // Simulate a delay with setTimeout
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(dummyPosts);
        }, 1000); // Simulate 1 second delay
      });
    },
  };
  
  export default PostService;