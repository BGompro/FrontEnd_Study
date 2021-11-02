import './App.css';

function App() {
  const name="Tom";
  const user={
    name:"Jane",
    age:20,
  };
  const naver={
    name:"네이버",
    url:"https://www.naver.com",
  };
  return (
    // className : class는 자바스크립트 예약어이기 때문에
    <div className="App">
      {/* style은 객체로 전달해주어야한다. camelCase */}
      <h1
        style={{
          color:"red",
          backgroundColor:"green",
        }}
        >
        Welcome, {name}. <p>{user.name} {user.age}</p></h1>
        <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
