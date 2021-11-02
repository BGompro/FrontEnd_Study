import { useRef } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord(){
    const days=useFetch("http://localhost:3001/days");
    const history=useHistory();

    function onSubmit(e){
        e.preventDefault(); //기본 기능을 막아줌
        
        console.log(engRef.current.value);
        console.log(korRef.current.value);
        console.log(dayRef.current.value);

        fetch(`http://localhost:3001/words/`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify({
                day:dayRef.current.value,
                eng:engRef.current.value,
                kor:korRef.current.value,
                isDone:false
            }),
        })
        .then(res=>{
            if(res.ok){
                alert('생성 성공!!');
                history.push(`/day/${dayRef.current.value}`);
            }
        });
    }

    const engRef=useRef(null);
    const korRef=useRef(null);
    const dayRef=useRef(null);

    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area"></div>
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            <div className="input_area"></div>
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day=>(
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            <button>저장</button>
        </form>
    );
}