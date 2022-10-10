import React, { useRef, useState, useEffect } from "react";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Main({ memes, standby }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [randomSad, setRandomSad] = useState(standby);

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
    setTimeout(() => {}, 0);
  });
  const hindiBtn = useRef(null);
  const ooBtn = useRef(null);

  const handleHindi = () => {
    //screen width
    let xPosition = Math.floor(
      Math.random() * (windowSize.innerWidth - 30) + 1
    );

    //screen height
    let yPosition = Math.floor(
      Math.random() * (windowSize.innerHeight - 30) + 1
    );
    hindiBtn.current.style.position = "absolute";
    hindiBtn.current.style.top = `${yPosition}px`;
    hindiBtn.current.style.left = `${xPosition}px`;
    handleEmotions();
  };
  const handleOo = () => {};

  const handleEmotions = () => {
    setRandomSad(memes[Math.floor(Math.random() * 15 + 1)]);
    console.log(randomSad);
  };

  return (
    <div className="font-quicksand relative h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col space-y-5 w-10/12 -mt-10 max-w-lg items-center">
        <img src={randomSad} className="h-36" alt="" />
        <div className="px-4 py-8 bg-gray-100 w-full shadow-inner">
          <p className="text-center text-lg font-bold">
            Rojean, pwede ba manligaw? 😅
          </p>
        </div>
        <div className="flex justify-center space-x-5 w-full font-bold">
          <button
            ref={hindiBtn}
            onClick={handleHindi}
            className="uppercase px-4 py-2 transition shadow-md transform active:scale-110 bg-red-500 text-red-50"
          >
            Hindi
          </button>
          <button
            ref={ooBtn}
            className="uppercase px-4 py-2 transition transform shadow-md active:scale-110 bg-green-500  text-green-50 "
          >
            Oo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
