// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textbox from "./components/Textbox.js";

function App() {
  return (
    <>
      <Navbar title="TEXTY" />
      <Textbox textheader="Please Enter the text you want to edit..." />
    </>
  );
}

export default App;
