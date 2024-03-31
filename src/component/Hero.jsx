import React from 'react';

function Hero() {
 return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-full bg-cover bg-center filter brightness-140" style={{backgroundImage: `url(/images/images4.jpg)`}}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="absolute top-6 text-xl left-14 transform -translate-x-1/2 text-white font-bold -translate-y-1/2 text-center">Academix</h1>
        <h1 className="absolute top-6 text-xl right-20 transform -translate-x-1/2 text-white font-bold -translate-y-1/2 text-center">login</h1>
        <h1 className="absolute top-6 text-xl right-0 transform -translate-x-1/2 text-white font-bold -translate-y-1/2 text-center">sign-in</h1>
        <div className="absolute  bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div>
            <p className="rounded-lg border-2 text-white bg-transparent">Announcing our release for Academix</p>
          </div>
          <h1 className="text-white text-3xl font-bold">Empowering Minds, Enriching Futures</h1>
          <p className="text-white text-lg mt-2">Learn to code from the best teachers</p>
        </div>
      </div>
    </div>
 );
}

export default Hero;
