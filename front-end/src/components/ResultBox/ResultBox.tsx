import ListRecomend from '../ListRecomend/ListRecomend'
import styles from './styles.module.css'
const ResultBox = () =>{
    return(
        <div className={styles.resultBox}>
            <h1 className={styles.h1} >Diet Sugestion</h1>
            <ListRecomend/>
        </div>
    )
}

export default ResultBox