import dummy from '../db/data.json';
import { useParams } from 'react-router';
import Word from './Word';


export default function Day(){
    const a=useParams();
    console.log(a);

    const day=a.day;
    const wordList=dummy.words.filter(word=>(
        word.day === Number(day)
    ));
    //dummy.word 이용할 것이다.
    return (
    <>
    <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>

        </table>
    </>
    );
}