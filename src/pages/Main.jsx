import React, { useRef, useState, useEffect } from "react";
import newmess from "../memes/new-mess.jpg";
import closeIcon from "../memes/close.png";
import arrow from "../memes/click.gif";
import uwu from "../memes/UwU1.mp4";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Main({ memes, standby }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [randomSad, setRandomSad] = useState(standby);
  const [viewMessage, setViewMessage] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [fiveClick, setFiveClick] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const [yes, setYes] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (fiveClick === 5) {
      setShowArrow(true);
    }
  }, [fiveClick]);

  const hindiBtn = useRef(null);
  const ooBtn = useRef(null);
  const vidRef = useRef(null);

  const handleHindi = () => {
    setFiveClick(() => fiveClick + 1);
    //screen width
    let xPosition = Math.floor(
      Math.random() * (windowSize.innerWidth - 100) + 1
    );

    //screen height
    let yPosition = Math.floor(
      Math.random() * (windowSize.innerHeight - 300) + 1
    );
    hindiBtn.current.style.position = "absolute";
    hindiBtn.current.style.top = `${yPosition}px`;
    hindiBtn.current.style.left = `${xPosition}px`;
    handleEmotions();
  };
  const handleOo = () => {
    setYes(true);
    vidRef.current.play();
  };

  const handleEmotions = () => {
    setRandomSad(memes[Math.floor(Math.random() * 15 + 1)]);
    console.log(randomSad);
  };

  const handleClose = () => {
    setPrompt("Too late.. bawal na mag backout HAHHA");
  };

  useEffect(() => {
    setTimeout(() => {
      setPrompt("");
    }, 5000);
  }, [prompt]);

  return (
    <div className="font-quicksand relative h-screen w-screen flex items-center justify-center">
      {viewMessage ? (
        <div className="flex flex-col space-y-5 w-10/12 -mt-10 max-w-lg relative items-center">
          <div
            className="absolute -top-8 right-0 p-1 active:scale-110 transition transform"
            onClick={handleClose}
          >
            <img src={closeIcon} className="h-6 w-6" alt="" />
          </div>
          <p className="text-sm font-semibold text-red-500">{prompt}</p>
          <img src={randomSad} className="h-36" alt="sad-melvin" />
          <div className="px-4 py-8 bg-gray-100 w-full shadow-inner">
            <p className="text-center text-lg font-bold">
              Hi Crush, pwede ba manligaw? 😅
            </p>
          </div>
          <div className="flex justify-center space-x-5 w-full font-bold">
            <button
              ref={hindiBtn}
              onClick={handleHindi}
              className="uppercase px-4 py-2 transition inline-flex h-10 shadow-md transform active:scale-110 border-2 border-red-500 text-red-500 bg-white"
            >
              Hindi
            </button>
            <div className="flex flex-col items-center">
              <button
                ref={ooBtn}
                onClick={handleOo}
                className="uppercase px-4 py-2 transition transform shadow-md active:scale-110 bg-green-500  text-green-50 "
              >
                Oo
              </button>
              {showArrow ? (
                <img src={arrow} className="h-14 mt-2 " alt="" />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 flex justify-center -mt-14 flex-col items-center">
          <div
            onClick={() => setViewMessage(true)}
            className="w-32 border p-2 pb-4 rounded-md shadow-md active:scale-110 transition transform "
          >
            <img src={newmess} alt="message-icon" />
          </div>
          <div>
            <p className="text-center font-bold">New message for Rojean</p>
            <p className=" text-center text-sm mt-1">Tap to view</p>
          </div>
        </div>
      )}

      <div
        className={`${
          yes
            ? "opacity-100 h-screen w-screen flex items-center justify-center absolute top-0 left-0 z-100"
            : "pointer-events-none h-screen w-screen flex items-center justify-center absolute top-0 left-0 z-100 opacity-0"
        }`}
      >
        <video width="320" height="240" controls ref={vidRef}>
          <source src={uwu} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Main;
