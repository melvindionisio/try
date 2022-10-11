import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Main from "./pages/Main";

import standby from "./memes/default.jpeg";
import meme1 from "./memes/1.jpg";
import meme2 from "./memes/2.jpg";
import meme3 from "./memes/3.jpg";
import meme4 from "./memes/4.jpg";
import meme5 from "./memes/5.jpg";
import meme6 from "./memes/6.jpg";
import meme7 from "./memes/7.jpg";
import meme8 from "./memes/8.jpg";
import meme9 from "./memes/9.jpg";
import meme10 from "./memes/10.jpg";
import meme11 from "./memes/11.jpg";
import meme12 from "./memes/12.jpg";
import meme13 from "./memes/13.jpg";
import meme14 from "./memes/14.jpg";
import meme15 from "./memes/15.jpg";

function App() {
  const memes = [
    meme1,
    meme2,
    meme3,
    meme4,
    meme5,
    meme6,
    meme7,
    meme8,
    meme9,
    meme10,
    meme11,
    meme12,
    meme13,
    meme14,
    meme15,
  ];
  return (
    <BrowserRouter>
      <div className="text-gray-700 h-screen w-screen overflow-hidden">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route
            path="home"
            element={<Main memes={memes} standby={standby} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
