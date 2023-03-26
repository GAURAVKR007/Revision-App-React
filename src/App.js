import "./App.css";
import Home from "./components/home/Home";
import Auth from "./components/authentication/Auth";
import Authentication from "./components/authentication/Authentication";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppHeader from "./components/appHeader/AppHeader";
import Hero from "./components/Hero/Hero";
import Protected from "./components/Protected";
// import { createBrowserRouter, createRoutesFromElements,Route ,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Protected Component = {Home} />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
