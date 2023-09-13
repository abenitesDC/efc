import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import LifeInsurance101 from './LifeInsurance101';

import './body.scss';
import Schedule from './Schedule';

const Body = () => {
  return (
    <div className="app--body">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/schedule" element={<Schedule />}></Route>
        <Route exact path="/life-insurance" element={<LifeInsurance101 />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
