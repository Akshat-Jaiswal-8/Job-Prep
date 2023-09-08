import { Hero } from "./pages/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Interview } from "./pages/Interview.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Hero />}></Route>
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/interview"} element={<Interview />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
