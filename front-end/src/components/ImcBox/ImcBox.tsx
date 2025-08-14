import styles from './styles.module.css'
const ImcBox = () =>{
    
    return(
     <div className={styles.imcBox}>
        <p className={styles.title} >Imc Calculator</p>
        <label className={styles.labelInput} >Weight</label>
        <input className={styles.input} placeholder=' Enter your weight' type="number" name="" id="" />
        <label className={styles.labelInput}>Height</label>
        <input className={styles.input} placeholder=' Enter your height' type="number" name="" id="" />
        <div className={styles.btnDiv} >
         <button className={styles.btn} >Calculate</button>
         <button className={styles.btn} >Reset</button>
        </div>
        
        <p className={styles.subtitle}>Seu imc é 20.10</p>
    </div>
    )
}

export default ImcBox