import React from "react";
import Nav from "./Components/NavBar/Nav";
import Movies from "./Components/Movies/Movies";
import SingleMovie from './Components/Movies/SingleMovies'
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/Home/MainPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Movies" element={<Movies />} />
          <Route path="/SingleMovie/:id" element={<SingleMovie/>} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
