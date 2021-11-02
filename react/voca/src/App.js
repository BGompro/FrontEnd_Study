import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateDay from './component/CreateDay';

function App() {
  return (
          // className : class는 자바스크립트 예약어이기 때문에
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          {/* 정확하게 path와 일치하는 것에 */}
          <Route exact path="/">
            <DayList/>
          </Route>
          <Route path="/day/:day">
            <Day/>
          </Route>
          <Route path="/create_word">
            <CreateWord/>
          </Route>
          <Route path="/create_day">
            <CreateDay/>
          </Route>
          <Route>
            <EmptyPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
