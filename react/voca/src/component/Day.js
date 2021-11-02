import dummy from '../db/data.json';
import { useParams } from 'react-router';

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
                    <tr key={word.id}>
                        <td>
                            {word.eng}
                        </td>
                        <td>
                            {word.kor}
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    </>
    );
}