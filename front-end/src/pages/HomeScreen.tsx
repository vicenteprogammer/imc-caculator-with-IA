import styles  from  './styles.module.css'

const HomeScreen = () =>{
   return(
    <div className={styles.imcBox}>
        <label className={styles.labelInput} >Weight</label>
        <input className={styles.input} placeholder='  Enter your weight' type="number" name="" id="" />
        <label className={styles.labelInput}>Height</label>
        <input className={styles.input} placeholder='  Enter your height' type="number" name="" id="" />
        <button className={styles.btn} >Calculate</button>
    </div>
   )
}

export default HomeScreen