import React from 'react';
import bg_image from '../../assets/background-destination-desktop.jpg';
import not_found from '../../assets/not-found.png'; // astronaut 404 image

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div className="text-white text-center flex flex-col items-center px-6  space-y-8 backdrop-blur-sm bg-black/30 rounded-2xl shadow-2xl max-w-md mt-24">
        <img
          src={not_found}
          alt="Not Found Astronaut"
          className="w-60 h-auto animate-float"
        />
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-wider">404 - Page Not Found</h1>
          <p className="text-lg font-light text-white/80">
            Looks like you've drifted off course. <br /> Let's navigate back to safety! 🪐
          </p>
        </div>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
