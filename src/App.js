import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Cv from "./components/Cv";
import NavBar from "./components/NavBar";
import { UserProvider } from "./components/UserContext";
import About from "./components/About";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
