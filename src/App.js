import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'antd';
import './App.less';

import HeaderNav from './components/HeaderNav';
import MainContent from './components/MainContent';
import CardMain from './components/CardMain';

const App = () => (
  <div className="App">
    <HeaderNav></HeaderNav>
    <MainContent></MainContent>
    <CardMain></CardMain>
  </div>
);

export default App;