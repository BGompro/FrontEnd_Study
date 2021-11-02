import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
function App() {
  return (
    // className : class는 자바스크립트 예약어이기 때문에
    <div className="App">
      <Header/>
      <DayList/>
      <Day/>
    </div>
  );
}

export default App;
