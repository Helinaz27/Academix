import React from "react";
import Admin from "./component/Admin/AdminNav";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";
import Signup from "./pages/Home/Signup";
import Navigation from "./component/Home/Navigation";
import Footer from "./component/General/Footer";
import User from "./component/Admin/users/User.jsx";
// import Studentdashboard from "./component/Student/Dashboard/Studentdashboard.jsx";
import Student from "./component/Student/Dashboard/Studentdashboard.jsx";
import Gpost from "./component/Student/General-post/Gpost";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./Features/auth/authSlice.js";
import Redirector from "./component/General/Redirector.jsx";
import Studentdashboard from "./component/Student/Dashboard/Studentdashboard.jsx";
import StudentNav from "./component/Student/StudentNav.jsx";

function App() {
  const user = useSelector(selectCurrentUser);
  console.log("Current user:", user);
  console.log("isStaff", user?.is_staff);
  const isStaff = user?.is_staff;

  return (
    <div className="">
      <main></main>
      <Routes>
        <Route index element={<Login />} />
        <Route index element={<Signup />} />
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        {isStaff && <Route path="/Admin" element={<Admin />} />}
        {!isStaff && <Route path="/Student" element={<Student />} />}
        <Route path="/Gpost" element={<Gpost />} />
        <Route path="/Redirector" element={<Redirector />} />
      </Routes>
      {/* <footer className="">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
