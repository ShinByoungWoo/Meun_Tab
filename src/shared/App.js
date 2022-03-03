import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Header from '../components/Header';
import MakingRoom from '../pages/MakingRoom';
import Setting from '../pages/Setting';
import ResultPeer from '../pages/ResultPeer';
import Test from "../pages/Test"


function App() {
  return (
    <>
      <Header/>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/makingroom" exact component={MakingRoom}></Route>
        <Route path="/setting" exact component={Setting}></Route>
        <Route path="/result" exact component={ResultPeer}></Route>
        <Route path="/test" exact component={Test}></Route>
      </ConnectedRouter>
    </>
  );
}

export default App;
