import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import City from "./Components/City";
import WeatherResult from "./Components/WeatherResult";
  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<City/>} />
        <Route path="/details" element={<WeatherResult />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;