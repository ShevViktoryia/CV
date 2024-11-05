import "./App.css";
import styled from "styled-components";
import Header from "./layout/header/Header";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
