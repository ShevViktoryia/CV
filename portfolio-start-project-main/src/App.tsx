import "./App.css";
import styled from "styled-components";
import Header from "./layout/header/Header";
import { About } from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
