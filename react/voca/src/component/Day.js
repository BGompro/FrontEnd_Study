import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Word from './Word';


export default function Day(){
    const a=useParams();
    console.log(a);

    const day=a.day;
    //dummy.word 대신 fetch를 이용하여 데이터를 불러올 것이다. 
    const [words,setWords]=useState([]);
    
    // useEffect()로 한 번만 실행해주도록 하여 서버에 있는 json 데이터 받아오기
    useEffect(()=>{
        //fetch() 이용하면 Promise 반환 된다.
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        });
    },[]);
    return (
    <>
    <h2>Day {day}</h2>
        <table>
            <tbody>
                {words.map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>

        </table>
    </>
    );
}