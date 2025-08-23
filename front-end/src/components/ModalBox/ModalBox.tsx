import { useState } from 'react'
import styles from './styles.module.css'
import type { SuggModel } from '../../model/suggModel'

type Props = {
    sug : boolean,
    iaResponse: string | SuggModel
}

const ModalBox = ({sug, iaResponse}: Props) =>{
    const [modal, setModal] = useState(sug)

    const closeModal = () =>{
        setModal(!modal)
    }


    if(modal){
     return(
      <div>
        <div className={styles.boxModal} >
            <div className={styles.modalTitle} >
                <p className= {styles.textStyle} >IA Suggestion</p>
            </div>
            <p className={styles.textStyle}>
                {typeof iaResponse === 'string' ? iaResponse : JSON.stringify(iaResponse)}
            </p>
            <div>
                <button className={styles.btn} onClick={closeModal} >Close</button>
            </div>
        </div>
      </div>
     )
    }
}

export default ModalBox
