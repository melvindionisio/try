import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../rojean.jpg";

function Welcome() {
  const [pageTransition, setPageTransition] = useState(false);
  const [cardTransition, setCardTransition] = useState(false);
  const [greetTransition, setGreetTransition] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  const [btnTransition, setBtnTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageTransition(true);
      setTimeout(() => {
        setCardTransition(true);
        setTimeout(() => {
          setGreetTransition(true);
          setTimeout(() => {
            setImageTransition(true);
            setTimeout(() => {
              setBtnTransition(true);
            }, 600);
          }, 500);
        }, 600);
      }, 200);
    }, 0);
  });
  return (
    <div
      className={`${
        pageTransition
          ? "transform translate-x-0 opacity-100 duration-500 transition font-quicksand h-screen w-screen flex items-center justify-center bg-sky-50"
          : "transform -translate-x-full opacity-50 duration-500 transition font-quicksand h-screen w-screen flex items-center justify-center bg-sky-50"
      }`}
    >
      <div
        className={`${
          cardTransition
            ? "shadow-md -mt-16 opacity-100 flex flex-col md:flex-row md:justify-between items-center w-10/12 max-w-xl  p-10 rounded-xl transition duration-300 bg-white"
            : "shadow-md -mt-16 opacity-0 flex flex-col md:flex-row items-center md:justify-between w-10/12 max-w-xl  p-10 rounded-xl transition duration-300 bg-white"
        }`}
      >
        <p
          className={`${
            greetTransition
              ? "pb-5 border-b md:border-b-0  md:pr-3 transform translate-y-0 opacity-100 text-center text-lg mb-10 transition duration-500"
              : "pb-5 border-b md:border-b-0   md:pr-3 transform translate-y-32 opacity-0 text-center text-lg mb-10 transition duration-500"
          }`}
        >
          <span className="text-left text-xl  block">Hi Rojean,</span>
          <span className="text-2xl text-left block">Welcome to my life!</span>
          <span className="block text-left text-red-500">charot.</span>
        </p>
        <div className="flex flex-col items-center">
          <div
            className={`${
              imageTransition
                ? "opacity-100 h-32 w-32 transform scale-100 rounded-full bg-gray-200 mb-6 duration-300 overflow-hidden ring-1 border-4 border-white ring-orange-300"
                : "opacity-0 h-32 w-32  transform scale-50 rounded-full bg-gray-200 mb-6 duration-300 overflow-hidden ring-1 border-4 border-white ring-orange-300"
            }`}
          >
            <img src={profile} alt="rojean.img" className="w-full h-full" />
          </div>

          <Link to="/login">
            <button
              className={`${
                btnTransition
                  ? "opacity-100 px-4 py-2 font-semibold text-sm text-sky-100 bg-sky-500 uppercase rounded-md duration-300 shadow-md"
                  : "opacity-0 px-4 py-2 font-semibold text-sm text-sky-100 bg-sky-500 uppercase rounded-md duration-300 shadow-md"
              }`}
            >
              Continue as <span className="font-bold">Rojean</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
