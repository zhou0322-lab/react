import React from "react";
import "./App.less";
import { Button, Input } from "antd";
import bookIcon from "./images/book_icon.png";
import { Helmet } from "react-helmet";
import { ReactComponent as Logo } from "./images/common_icon.svg";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>测试react</title>
      </Helmet>
      <img src={bookIcon} alt="" />
      <Button type="primary">antd</Button>
      <Input placeholder="aaa" />
      <Logo />
    </div>
  );
}

export default App;
