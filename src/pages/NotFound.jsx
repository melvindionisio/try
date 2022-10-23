import React, { useState } from "react";

function NotFound() {
  return (
    <div className="flex justify-center items-center font-quicksand h-screen w-screen">
      <div className="text-center">
        <p className="font-light text-gray-400">Error 404</p>
        <p className="text-xl uppercase mt-2 font-semibold text-gray-600">
          Feelings no longer exist.
        </p>
        <p className="text-sm p-5 bg-red-50 border border-red-200 mt-5 text-red-500">
          Contact developer if you
          <br />
          think this is a mistake :>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
