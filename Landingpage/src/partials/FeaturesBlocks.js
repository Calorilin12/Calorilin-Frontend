import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-300 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-primary-500 h2 mb-4">Teams</h2>
            <p className="text-xl text-gray-700">Informatics engineering student Electronic Engineering Polytechnic Institute of Surabaya</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="relative rounded-md" src={require('../images/rahano.png').default} width="300" height="300" alt="rahano" />
              <h4 className="mt-2 text-xl font-bold leading-snug tracking-tight mb-1">Made Rahano Satryani Widhi</h4>
              <p className="text-gray-700 text-center">Product Owner & Deployment</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="relative rounded-md" src={require('../images/irgy.png').default} width="300" height="300" alt="irgy" />
              <h4 className="mt-2 text-xl font-bold leading-snug tracking-tight mb-1">Stefanus Irgy Hananto</h4>
              <p className="text-gray-700 text-center">UI / UX & Front-End Developer</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="relative rounded-md" src={require('../images/audy.png').default} width="300" height="300" alt="audy" />
              <h4 className="mt-2 text-xl font-bold leading-snug tracking-tight mb-1">Audy Istania Narita</h4>
              <p className="text-gray-700 text-center">Front-End Developer</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="relative rounded-md" src={require('../images/fabyan.png').default} width="300" height="300" alt="fabyan" />              
              <h4 className="mt-2 text-xl font-bold leading-snug tracking-tight mb-1">Fabyan Kindarya</h4>
              <p className="text-gray-700 text-center">Back-End Developer</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="relative rounded-md" src={require('../images/faiq.png').default} width="300" height="300" alt="faiq" />
              <h4 className="mt-2 text-xl font-bold leading-snug tracking-tight mb-1">Asyam Faiq</h4>
              <p className="text-gray-700 text-center">Mobile Developer</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="relative rounded-md" src={require('../images/helmi.png').default} width="300" height="300" alt="helmi" />
              <h4 className="mt-2 text-xl font-bold leading-snug tracking-tight mb-1">Helmi Dharmawan</h4>
              <p className="text-gray-700 text-center">Mobile Developer</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
