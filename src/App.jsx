import React from "react";
import AdminNav from "./component/Admin/AdminNav";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";
import Signup from "./pages/Home/Signup";
import Navigation from "./component/Home/Navigation";
import Footer from "./component/General/Footer";
import User from "./component/Admin/users/User.jsx";
import Studentdashboard from "./component/Student/Dashboard/Studentdashboard.jsx";
import StudentNav from "./component/Student/StudentNav.jsx";

function App() {
  return (
    <div className="">
      <main></main>
      <Routes>
        <Route index element={<Studentdashboard />} />
        <Route index element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Admin" element={<AdminNav />} />
      </Routes>
      {/* <footer className="">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
