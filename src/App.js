import RegisterForm from "./components/Forms/RegisterForm";
import Login from "./components/Forms/Login";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import UserDetails from './components/UserDetails';
import EducationDetails from './components/EducationDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/educationdetails" element={<EducationDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
