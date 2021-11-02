// const Hello=()=>{
//     <p>Hello</p>;
// };

// export default Hello;
import {useState} from "react";

export default function Hello(props){
    console.log(props);

    // let name='Mike';
    const [name,setName]=useState('Mike');
    const [age,setAge]=useState(props.age);
    function changeName(){
        const newName = name==='Mike'?"Jane":"Mike";
        // document.getElementById("name").innerText=name;
        setName(newName);
    }
    return (
    <div>
        <h1>state</h1>
        <h2>컴포넌트의 속성값</h2>
        <h3>이름 : {name} ({age}) </h3>
        <button onClick={()=>{
            changeName();
            setAge(age+1);
        }}>Change</button>
    </div>
    );
}