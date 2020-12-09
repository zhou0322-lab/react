import React from "react";
import "./App.scss";
import Button from "./components/Button";
import bookIcon from "./images/book_icon.png";
import { ReactComponent as Logo } from "./images/common_icon.svg";

function App() {
  return (
    <div className="App">
      <img src={bookIcon} alt="" />
      <Button />
      <Logo />
    </div>
  );
}

export default App;
