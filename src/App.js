import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { ThemeProvider } from "./components/ContextProvide";
import NavBar from "./components/Navigation Bar/NavBar";

export function reverseString(string) {
  let final = "";

  for (let i = string.length - 1; i >= 0; i--) {
    final += string[i];
  }
  return final;
}

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
