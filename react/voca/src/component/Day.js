import dummy from '../db/data.json';

export default function Day(){
    const day=1;
    const wordList=dummy.words.filter(word=>(
        word.day === day
    ));
    //dummy.word 이용할 것이다.
    return (
    <>
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