import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Nav from "./routes/Nav";
import Genres from "./routes/Genres";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot >
      <Router>
        <Nav />
        <Routes>
          <Route path="/page/:genres/:num" element={<Genres />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;