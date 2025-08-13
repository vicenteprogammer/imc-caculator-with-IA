import ListRecomend from '../ListRecomend/ListRecomend'
import styles from './styles.module.css'
const ResultBox = () =>{
    return(
        <div className={styles.resultBox}>
            <h1 className={styles.h1} >Diet Sugestion</h1>
            <div className={styles.list}>
                <ListRecomend/>
                <ListRecomend/>

            </div>
        </div>
    )
}

export default ResultBox