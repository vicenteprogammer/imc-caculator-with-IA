
import  { useState } from 'react'
import styles from './styles.module.css'
import ModalBox from '../ModalBox/ModalBox'
import { DiVim } from 'react-icons/di'
const ImcBox = () =>{
    const [imcClick, setImcClick] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    const open = () => {
        setOpenModal(!openModal)
    }

    const clickCalc = () =>{
        setImcClick((prevClick) => prevClick = true)
    }

    const resetCalc = () =>{
        setImcClick((prevClick)=> prevClick = false)
    }
    return(
     <div style={{display: 'flex', alignItems: '', justifyContent: 'flex-end', marginTop: 190, marginRight: 100}}>
        <div className={styles.imcBox}>
        <p className={styles.title} >Imc Calculator</p>
        <label className={styles.labelInput} >Weight</label>
        <input className={styles.input} placeholder=' Enter your weight' type="number" name="" id="" />
        <label className={styles.labelInput}>Height</label>
        <input className={styles.input} placeholder=' Enter your height' type="number" name="" id="" />
        <div className={styles.btnDiv} >
         <button className={styles.btn} onClick={clickCalc} >Calculate</button>
         <button className={styles.btn} onClick={resetCalc}>Reset</button>
        </div>

        {imcClick && <><button className={styles.btnIa} onClick={open} >IA Suggestion</button><p className={styles.subtitle}>Seu imc é 20.10</p></>}

        {openModal && <div><ModalBox sug={true}/></div>}
    </div>
     </div>
    )
}

export default ImcBox