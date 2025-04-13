import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Feature";
import Task from "./components/Task";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='bg-[#f5f3ff] min-h-screen text-center p-4'>
      <Navbar />
      <Home />
      <Features />
      <Task />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
