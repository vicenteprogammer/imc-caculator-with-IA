import { useState } from 'react'
import styles from './styles.module.css'

type Props = {
    sug : boolean
}

const ModalBox = ({sug}: Props) =>{
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
            <p className= {styles.textStyle} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias minima reiciendis obcaecati, ut illo, quia cupiditate ipsum nisi eligendi exercitationem. Eligendi harum delectus sed veniam. Obcaecati explicabo dolores maxime.</p>
            <div>
                <button className={styles.btn} onClick={closeModal} >Close</button>
            </div>
        </div>
      </div>
     )
    }
}

export default ModalBox
