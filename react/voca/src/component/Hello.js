// const Hello=()=>{
//     <p>Hello</p>;
// };

// export default Hello;
import World from "./World";
import styles from "./Hello.module.css";
export default function Hello(){
    return (
    <div>
        <p style={
        {
            color:'#f00',
            borderRight:'2px solid #000',
            marginBottom: '30px',
            opacity:0.5,
        }
        }
        >Hello</p>
        <World/>
        <div className={styles.box}>Wow~</div>
    </div>
    );
}