import React, { useState } from 'react';
import './App.less';
import { Button, Input, Select } from 'antd';
import Wordcloudl from './components/WordCloud';
import SelCard from './components/SelCard';
import Rc from './components/RcMotion';
import { QuestionCircleFilled } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
const { Option } = Select;

interface MapProps {
  [key: string]: RegExp;
}

export default function ParamsExample() {
  const [val, setVal] = useState<any>('');
  const [selVal, setSelVal] = useState<any>('');
  const list = [
    {
      value: 1,
      name: 'aq',
    },
    {
      value: 15,
      name: 'qa',
    },
    {
      value: 15,
      name: 'sa',
    },
  ];
  const inputChange = (e: any) => {
    const { value } = e.target;
    const map: MapProps = {
      zh: /^[\u0391-\uFFE5]*$/g,
      number: /^\d*$/g,
      zm: /^[a-zA-z]*$/g,
    };
    if (map[selVal].test(value) || value === '') {
      setVal(value);
    }
  };

  const selChange = (val: string) => {
    console.log(val);
    setSelVal(val);
  };
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h2>Acssssss</h2>
        <Input value={val} onChange={inputChange} />
        <Select style={{ width: 200 }} onChange={selChange} value={selVal}>
          <Option value="number">数字</Option>
          <Option value="zh">中文</Option>
          <Option value="zm">字母</Option>
        </Select>
        <Wordcloudl list={list} />
        <SelCard checked={true} bodyStyle={{ padding: 0 }} checkIcon={<QuestionCircleFilled />}>
          <div>111111111</div>
        </SelCard>
        <SelCard bodyStyle={{ marginTop: 20 }}>
          <div>111111111</div>
        </SelCard>
        <Rc visible={true} />
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
          <Route path="/:id">
            <Child />
          </Route>
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
    history.push('/Zillow Group');
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
