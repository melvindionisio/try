import React, { useRef, useState, useEffect } from "react";
import newmess from "../memes/new-mess.jpg";
import closeIcon from "../memes/close.jpg";
import arrow from "../memes/click.gif";
import uwu from "../memes/UwU1.mp4";
import yes1 from "../memes/yes1.jpg";
import yes2 from "../memes/yes2.jpg";
import yes3 from "../memes/yes3.jpg";
import yes4 from "../memes/yes4.jpg";
import yes5 from "../memes/yes5.jpg";
import marry from "../memes/marry.jpg";
import sad from "../memes/sad.mp3";

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

  const [audio] = useState(new Audio(sad));

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
  const overlay = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);
  const six = useRef(null);
  const seven = useRef(null);

  const handleHindi = () => {
    setFiveClick(() => fiveClick + 1);
    audio.play();
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
    audio.pause();
    setYes(true);
    vidRef.current.play();
    setTimeout(() => {
      one.current.style.opacity = 1;
      setTimeout(() => {
        two.current.style.opacity = 1;
        setTimeout(() => {
          three.current.style.opacity = 1;
          setTimeout(() => {
            four.current.style.opacity = 1;
            setTimeout(() => {
              five.current.style.opacity = 1;
              setTimeout(() => {
                six.current.style.opacity = 1;
              }, 750);
            }, 750);
          }, 750);
        }, 750);
      }, 750);
    }, 1000);

    setTimeout(() => {
      seven.current.style.opacity = 1;
      seven.current.style.height = "150px";
    }, 13000);
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

  const handleCloseVid = () => {
    setYes(false);
    vidRef.current.load();
    one.current.style.opacity = 0;
    two.current.style.opacity = 0;
    three.current.style.opacity = 0;
    four.current.style.opacity = 0;
    five.current.style.opacity = 0;
    six.current.style.opacity = 0;
    seven.current.style.opacity = 0;
    seven.current.style.height = "0px";
  };

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
          <img src={randomSad} className="h-36" alt="sad" />
          <div className="px-4 py-8 bg-gray-100 w-full shadow-inner">
            <p className="text-center  font-bold">
              Hi Roj! Kung ang english ng baka ay cow.. pwede bang manligaw? 😅
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
            <p className=" text-center text-sm mt-1">Tap to open</p>
          </div>
        </div>
      )}

      <div
        className={`${
          yes
            ? "bg-black opacity-100  h-screen w-screen flex flex-col  items-center justify-center absolute top-0 right-0 z-100 transition-all duration-900"
            : "bg-black pointer-events-none transition-all duration-900 h-screen w-screen flex flex-col items-center justify-center absolute top-full right-0 z-100 opacity-0 "
        }`}
        ref={overlay}
      >
        <p className="text-lg font-semibold p-2 px-3 bg-white z-100 border text-red-500 mb-4 uppercase">
          Yieeeeeee! 🫶🖤
        </p>

        <img
          src={yes2}
          ref={one}
          className="absolute transition opacity-0  top-5 left-50 h-32"
          alt=""
        />
        <img
          src={yes4}
          ref={two}
          className="opacity-0  absolute bottom-36 transition -left-2 z-0 h-40"
          alt=""
        />
        <img
          src={yes5}
          ref={three}
          className="absolute  opacity-0 transition bottom-10 -right-8 h-40"
          alt=""
        />
        <img
          ref={four}
          src={yes1}
          className="absolute top-40 -left-3 h-28 opacity-0 transition  "
          alt=""
        />
        <img
          src={yes3}
          ref={five}
          className=" absolute opacity-0 transition bottom-50 z-50 -right-3 h-28"
          alt=""
        />

        <img
          src={marry}
          ref={seven}
          className="absolute transition-all duration-1000 opacity-0  top-1/2 -mt-20 left-50 z-100 h-0"
          alt=""
        />

        <video width="90%" height="720" ref={vidRef}>
          <source src={uwu} type="video/mp4" />
        </video>

        <div
          className=" active:scale-110 transition transform mt-10 "
          onClick={handleCloseVid}
        >
          <img src={closeIcon} className="h-10 w-10" alt="close" />
        </div>

        <p
          ref={six}
          className="opacity-0 text-lg font-semibold p-1 px-3 bg-white z-100 absolute bottom-20 border text-red-600  shadow-lg"
        >
          wavvyuuuu mwuah 💌{" "}
        </p>
      </div>
    </div>
  );
}

export default Main;
