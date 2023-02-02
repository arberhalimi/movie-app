import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import Error from "./pages/Error";
import Appcss from "./App.css"


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:id" element={<Movie />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
