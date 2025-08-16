import ApresentationApp from '../components/ApresentationApp/ApresentationApp'
import ImcBox from '../components/ImcBox/ImcBox'
import ModalBox from '../components/ModalBox/ModalBox'
import styles  from  './styles.module.css'

const HomeScreen = () =>{
   return(
    <div className={styles.page} >
      <div className={styles.apresetationBox}>
         <ApresentationApp/>
      </div>
      <div>
      <ImcBox />
      <div>
         <ModalBox/>
      </div>
      </div>
   </div>
   )
}

export default HomeScreen