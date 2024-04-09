import React from "react";
import AdminNav from "./component/Admin/AdminNav";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";
import Signup from "./pages/Home/Signup";
import Navigation from "./component/Home/Navigation";
import Footer from "./component/General/Footer";
import Gpost from "./component/General-post/Gpost";

function App() {
  return (
    <div className="">
      <main></main>
      <Routes>
        <Route index element={<Gpost />} />
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
