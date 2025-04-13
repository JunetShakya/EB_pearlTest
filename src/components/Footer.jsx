import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#f5f3ff] text-gray-700 px-6 py-12 text-sm'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Description and Icons */}
        <div>
          <p className='mb-4 text-justify '>
            Curabitur consequat, purus a scelerisque sagittis, nulla metus
            tincidunt elit, vel venenatis nulla libero nec nulla. Suspendisse
            potenti. Aenean a justo vel sapien pellentesque tincidunt.
          </p>
          <div className='flex space-x-4'>
            <a href='#' className='text-purple-500 hover:text-purple-700'>
              <FaLinkedin size={20} />
            </a>
            <a href='#' className='text-purple-500 hover:text-purple-700'>
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className='font-semibold mb-2'>Products</h4>
          <ul className='space-y-1 text-center'>
            <li>Payments</li>
            <li>Invoice Factoring</li>
            <li>Invoice finance</li>
            <li>Supplier finance</li>
            <li>Customer finance</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className='font-semibold mb-2'>Company</h4>
          <ul className='space-y-1 text-center'>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className='font-semibold mb-2'>Resources</h4>
          <ul className='space-y-1 text-center'>
            <li>Frequently asked questions</li>
            <li>Knowledge base</li>
            <li>API documentation</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-200 mt-10 pt-4 flex justify-between text-xs text-gray-500'>
        <div className='space-x-4'>
          <a href='#'>Privacy policy</a>
          <a href='#'>Contact us</a>
        </div>
        <div className='space-x-4'>
          <a href='#'>Site map</a>
          <span>@abc</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
