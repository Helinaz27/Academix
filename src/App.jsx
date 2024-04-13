import React from "react";
import { Router, Route, Routes, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "./Features/auth/authSlice.js";
// Imported The Landing Page Routes
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Home/Login";
import Signup from "./pages/Home/Signup";
//Imported Admin Routes
import AdminDashboard from "./component/Admin/dashboard/Home";
import Department from "./component/Admin/Departmet/Department.jsx";
import Admin_General_post from "./component/Admin/General-post/Gpost";
import Staff from "./component/Admin/Staff/Staff";
import StudentList from "./component/Admin/users/User.jsx";
import AdminEvent from "./component/Admin/Event/Events";
// Imported Student Routes
import StudentDashboard from "./component/Student/Dashboard/Home";
import Event_Post from "./component/Student/View-Post/Event-post/Gpost";
import General_post from "./component/Student/View-Post/General-post/Gpost";
import Club_Post from "./component/Student/View-Post/Club-Post/Gpost";
import Student_Section from "./component/Student/View-Post/Rep-Post/Gpost";
import StudentCources from "./component/Student/Cources/Cources";
import StudentProfile from "./component/Student/Profile/Profile";
// Imported Rep Routes

// Imported Club Owner Routes

// Imported Route Protection
import Redirector from "./component/General/Redirector";

function App() {
  const user = useSelector(selectCurrentUser);
  const Token = useSelector(selectCurrentToken);
  console.log("Token", Token);
  console.log("isStaff", user?.is_staff);
  console.log("Token", user?.Token);

  const isStaff = user?.is_staff;

  return (
    <div className="">
      <main></main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Redirector" element={<Redirector />} />
        <Route path="Admin" element={<AdminDashboard />} />
        <Route path="Department" element={<Department />} />
        <Route path="Admin_General_post" element={<Admin_General_post />} />
        <Route path="Staff" element={<Staff />} />
        <Route path="StudentList" element={<StudentList />} />
        <Route path="AdminEvent" element={<AdminEvent />} />
        <Route path="Student" element={<StudentDashboard />} />
        <Route path="StEvent" element={<Event_Post />} />
        <Route path="General" element={<General_post />} />
        <Route path="Club" element={<Club_Post />} />
        <Route path="Section" element={<Student_Section />} />
        <Route path="Stcources" element={<StudentCources />} />
        <Route path="Profile" element={<StudentProfile />} />
      </Routes>
      {/* <footer className="">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
