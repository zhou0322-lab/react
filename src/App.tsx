import React from "react";
import "./App.less";
import { Button, Input } from "antd";
import bookIcon from "./images/book_icon.png";
import { Helmet } from "react-helmet";
import { ReactComponent as Logo } from "./images/common_icon.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Test = () => {
  return <div>aaaa</div>;
};

const TestB = () => {
  return <div>bbbb</div>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>测试react</title>
        </Helmet>
        <nav>
          <ul>
            <li>
              <Link to="/a">Home</Link>
            </li>
            <li>
              <Link to="/b">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <img src={bookIcon} alt="" />
        <Button type="primary">antd</Button>
        <Input placeholder="aaa" />
        <Logo />
        <Switch>
          <Route path="/a" component={Test} />
          <Route path="/b" component={TestB} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
