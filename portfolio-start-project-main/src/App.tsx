import "./App.css";
import styled from "styled-components";
import Header from "./layout/header/Header";
import { About } from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
    </div>
  );
}

export default App;
