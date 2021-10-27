import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Copyrights note */}
          <div className="text-sm text-gray-700 mr-4"><a className="text-teal-500 hover:underline" href="">Calorilin App</a>. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
