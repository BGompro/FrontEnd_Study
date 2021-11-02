import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import Word from './Word';


export default function Day(){
    const a=useParams();
    console.log(a);

    const day=a.day;
    //dummy.word 대신 fetch를 이용하여 데이터를 불러올 것이다. 
    
    const words=useFetch(`http://localhost:3001/words?day=${day}`);

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