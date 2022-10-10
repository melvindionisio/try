import React, { useState, useEffect } from "react";
import profile from "../rojean.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [pageTransition, setPageTransition] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  const cred = {
    username: "Katie",
    password: "molano-03-27",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPageTransition(true);

      setTimeout(() => {
        setImageTransition(true);
      }, 500);
    }, 0);
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === cred.username && password === cred.password) {
      navigate("/home");
    } else {
      setPrompt("Mali ata username or password mo haha.");
    }
  };

  return (
    <div
      className={`${
        pageTransition
          ? "transform translate-x-0 opacity-100 duration-500 transition font-quicksand h-screen w-screen flex items-center justify-center"
          : "transform translate-x-full opacity-50 duration-500 transition font-quicksand h-screen w-screen flex items-center justify-center"
      }`}
    >
      <div className="-mt-10 flex flex-col items-center text-md  w-10/12  max-w-xl space-y-4">
        <div
          className={`${
            imageTransition
              ? "opacity-100 h-40 w-40 transform scale-100 rounded-full bg-gray-200 duration-300 shadow-md overflow-hidden"
              : "opacity-0 h-40 w-40  transform scale-50 rounded-full bg-gray-200  duration-300 shadow-md overflow-hidden"
          }`}
        >
          <img src={profile} alt="rojean.img" className="w-full h-full" />
        </div>
        <p className="text-center pb-2 uppercase font-bold">Rojean 🦋</p>
        <p className="text-xs text-center text-red-400">{prompt}</p>

        <div className="w-full space-y-2 ">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setPrompt("");
            }}
            className="px-3 py-3 ring-1 ring-gray-400 focus:ring-sky-400 focus:bg-sky-50 rounded-md focus:outline-none focus:border-none w-full"
            type="text"
          />
          <p className="text-xs">Your Litmatch username.</p>
        </div>
        <div className="w-full space-y-2">
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPrompt("");
            }}
            className="px-3 py-3 ring-1 ring-gray-400 focus:ring-sky-400 focus:bg-sky-50  rounded-md focus:outline-none focus:border-none w-full"
            type="password"
          />
          <p className="text-xs">
            Your password is your Surname and birthday e.g. delacruz-01-21
            (MM/DD).
          </p>
        </div>

        <button
          onClick={handleLogin}
          className="transition transform active:scale-105 px-4 py-4 w-full font-semibold text-sky-100 bg-sky-500 uppercase rounded-md text-sm"
        >
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
