import React from "react";
import { Routes, Route, Router } from "react-router-dom"; // we get routes, route and router from react-router-dom.
// import pages
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* the navbar attached. */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/country/:id" element={<SingleCountry />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
