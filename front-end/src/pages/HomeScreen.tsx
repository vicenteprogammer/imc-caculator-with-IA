import styles  from  './styles.module.css'

const HomeScreen = () =>{
   return(
    <div className={styles.imcBox}>
        <label>Weight</label>
        <input className={styles.input} type="number" name="" id="" />
        <label>Height</label>
        <input className={styles.input} type="number" name="" id="" />
        <button className={styles.btn} >Calculate</button>
    </div>
   )
}

export default HomeScreen