import React from "react";

const Home = () => {
  return (
    <section className='bg-gray-900 text-white py-20 px-6 relative overflow-hidden'>
      <div className='max-w-2xl mx-auto z-10 relative'>
        <h1 className='text-4xl md:text-5xl font-extrabold leading-tight mb-4'>
          Get instant cash flow with invoice factoring
        </h1>
        <p className='text-gray-300 mb-6'>
          Why wait? Get same day funding and a faster way to access cash flow.
        </p>
        <button className='bg-white text-indigo-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition'>
          Get started
        </button>
      </div>
      {/* Decorative Rings */}
      <div className='absolute top-0 right-0 w-1/2 h-full flex justify-end items-start opacity-50'>
        <div className='w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl'></div>
      </div>
    </section>
  );
};

export default Home;
