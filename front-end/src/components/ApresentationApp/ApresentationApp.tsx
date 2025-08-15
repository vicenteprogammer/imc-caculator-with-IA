import styles from './sttyles.module.css'
import { FaReact } from "react-icons/fa";
const ApresentationApp = () =>{
    return(
        <div className={styles.boxText} >
            <div className={styles.boxTitle}>
                <FaReact className={styles.iconStyle}/>
                <p className={styles.titleText} > IMC IA</p>
            </div>
           <div className={styles.boxText}>
             <p className={styles.textStyle}>Sua calculadora de Imc Inteligente com IA integrada....</p>
             <p className={styles.midTitle}>Sugere boa dicas para depedendo de como está sua situação.</p>
           </div>
        </div>
    )
}

export default ApresentationApp