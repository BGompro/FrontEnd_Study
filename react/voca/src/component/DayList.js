import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList(){
    // const [days, setDays]=useState([]);
    
    const days=useFetch("http://localhost:3001/days");

    // useEffect(()=>{
    //     //fetch() 이용하면 Promise 반환 된다.
    //     fetch("http://localhost:3001/days")
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // },[]);

    return (<ul className="list_day">
                {days.map(day=>(
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                        
                    </li>
                ))}
                
            </ul>
    );
}