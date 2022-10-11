import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Main from "./pages/Main";

import standby from "./memes/default.jpeg";
import meme1 from "./memes/1.png";
import meme2 from "./memes/2.png";
import meme3 from "./memes/3.png";
import meme4 from "./memes/4.png";
import meme5 from "./memes/5.png";
import meme6 from "./memes/6.png";
import meme7 from "./memes/7.png";
import meme8 from "./memes/8.png";
import meme9 from "./memes/9.png";
import meme10 from "./memes/10.png";
import meme11 from "./memes/11.png";
import meme12 from "./memes/12.png";
import meme13 from "./memes/13.png";
import meme14 from "./memes/14.png";
import meme15 from "./memes/15.png";

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
      <div className="text-gray-700">
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
