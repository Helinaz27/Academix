import React, { useEffect, useState } from "react";
import PostService from "./PostService.js";
import TrendingPosts from "./TrendingPosts.jsx";
import Sidebar from "./Sidebar.jsx";
import courseData from "./Courses.json"; // Import the course data from a dummy JSON file
import tw from 'tailwind-styled-components';
import StudentNav from "../StudentNav"

const StudentDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await PostService.getLatestPosts();
      setPosts(posts);
    };

    // Simulating API call to fetch courses
    setCourses(courseData);

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-200 p-1">
      <div className="flex items-right mb-2">
        <input
          className="border-[1px] h-[1.0rem] w-[15%] font-serif text-x p-1 ml-auto"
          type="text"
          placeholder="Search ..."
        />
      </div>
      <div className="flex">
        <div className="flex-1 m-5 md-5">
                  <StudentNav/>

          <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-auto">
            <p className="text-xl font-bold">Hello</p>
            <p className="text-gray-600">Welcome to your dashboard</p>
          </div>
          <TrendingPosts posts={posts} />
          <div className="mt-4">
            <h3 className="text-3xl font-bold mb-4">My Courses</h3>
            <h4 className="text-3xl font-bold mb-4">Semester Courses</h4>
            <table className="w-auto min-w-full divide-y divide-gray-200 ounded-lg shadow-md">
              <tbody className="bg-white divide-y divide-gray-200 ">
                {courses.map((course) => (
                  <tr key={course.id} className="bg-white p-4 r mb-4 ls-1">
                    <td className="mb-2">{course.code}</td>
                    <td className="mb-2">{course.title}</td>
                    <td>
                      <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-300">
                        View Course
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md mt-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
