import styles from './styles.module.css'
const ImcBox = () =>{
    return(
     <div className={styles.imcBox}>
        <label className={styles.labelInput} >Weight</label>
        <input className={styles.input} placeholder='  Enter your weight' type="number" name="" id="" />
        <label className={styles.labelInput}>Height</label>
        <input className={styles.input} placeholder='  Enter your height' type="number" name="" id="" />
        <button className={styles.btn} >Calculate</button>
        <p className={styles.subtitle}>Seu imc é 20.10</p>
    </div>
    )
}

export default ImcBox