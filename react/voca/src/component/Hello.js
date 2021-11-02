// const Hello=()=>{
//     <p>Hello</p>;
// };

// export default Hello;
import World from "./World";
import styles from "./Hello.module.css";
import {useState} from "react";

export default function Hello(){
    // let name='Mike';
    const [name,setName]=useState('Mike');
    function changeName(){
        const newName=name==='Mike'?"Jane":"Mike";
        // document.getElementById("name").innerText=name;
        setName(newName);
    }
    return (
    <div>
        <h1>state</h1>
        <h2>컴포넌트의 속성값</h2>
        <h3 id="name">이름 : {name} </h3>
        <button onClick={changeName}>Change</button>
    </div>
    );
}