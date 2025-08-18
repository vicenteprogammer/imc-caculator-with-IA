
import  { useState } from 'react'
import styles from './styles.module.css'
import ModalBox from '../ModalBox/ModalBox'
import { calc } from '../../service/calc-imc'
const ImcBox = () =>{
    const [imcClick, setImcClick] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    const [weightValue, setWeightValue] = useState('')
    const [heightValue, setheightValue] = useState('')

    const [imcValue, setImcValue] = useState(0)



    const open = () => {
        setOpenModal(!openModal)
    }

    const clickCalc = () =>{
        setImcClick((prevClick) => prevClick = true)

        const imc = calc(Number(heightValue),Number(weightValue))

        setImcValue(imc)

    }

    const resetCalc = () =>{
        setImcClick((prevClick)=> prevClick = false)
        setWeightValue('')
        setheightValue('')
    }


    return(
     <div style={{display: 'flex', alignItems: '', justifyContent: 'flex-end', marginTop: 190, marginRight: 100}}>
        <div className={styles.imcBox}>
        <p className={styles.title} >Imc Calculator</p>

        <label className={styles.labelInput} >Weight</label>
        <input className={styles.input} placeholder=' Enter your weight' value={weightValue} onChange={(e)=>setWeightValue(e.target.value)} type="number" name="" id="" />

        <label className={styles.labelInput}>Height</label>
        <input className={styles.input} placeholder=' Enter your height' value={heightValue} onChange={(e)=>setheightValue(e.target.value)}  type="number" name="weight" />


        <div className={styles.btnDiv} >
         <button className={styles.btn} onClick={clickCalc} >Calculate</button>
         <button className={styles.btn} onClick={resetCalc}>Reset</button>
        </div>

        {imcClick && <><button className={styles.btnIa} onClick={open} >IA Suggestion</button><p className={styles.subtitle}>Seu imc é {imcValue.toFixed(2)}</p></>}
        {openModal && <div><ModalBox sug={true}/></div>}
    </div>
     </div>
    )
}

export default ImcBox