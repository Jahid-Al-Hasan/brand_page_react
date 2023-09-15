import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log_in from "./pages/Log_in";
import Sign_up from "./pages/Sign_up";
import Home from "./pages/home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<Log_in />} />
          <Route path="/SignUp" element={<Sign_up />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
