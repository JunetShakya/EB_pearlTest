import React from "react";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-white shadow-md'>
      <div className='flex items-center space-x-2'>
        <span className='text-3xl text-violet-600'>🔺</span>
        <h1 className='text-xl font-bold text-gray-900'>ABC</h1>
      </div>
      <ul className='flex space-x-6 text-sm text-gray-700'>
        <li>
          <a href='#'>Products</a>
        </li>
        <li>
          <a href='#'>Solutions</a>
        </li>
        <li>
          <a href='#'>Help center</a>
        </li>
        <li>
          <a href='#'>Get started</a>
        </li>
      </ul>
      <div className='flex items-center space-x-4'>
        <a href='#' className='text-blue-600 text-sm'>
          Login
        </a>
        <button className='bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700'>
          Request a demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
