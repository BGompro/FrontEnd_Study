import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  return (
    // className : class는 자바스크립트 예약어이기 때문에
    <div className="App">
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
