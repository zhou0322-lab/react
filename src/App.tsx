import React from "react";
import "./App.less";
import { Button } from "antd";
import Wordcloudl from "./components/WordCloud";
import SelCard from "./components/SelCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  const list = [
    {
      value: 1,
      name: "aq",
    },
    {
      value: 15,
      name: "qa",
    },
    {
      value: 15,
      name: "sa",
    },
  ];
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <Wordcloudl list={list} />
        <SelCard checkd={true}>
          <div>111111111</div>
        </SelCard>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id }: any = useParams();
  const history = useHistory();
  console.log(useLocation(), useRouteMatch());
  const go = () => {
    history.push("/Zillow Group");
  };
  return (
    <div>
      <Button onClick={go} type="primary">
        Zillow Group
      </Button>
      <h3>ID: {id}</h3>
    </div>
  );
}
