import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HideNavbar from "./components/HideNavbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HideNavbar>
        <Navbar />
      </HideNavbar>

      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
