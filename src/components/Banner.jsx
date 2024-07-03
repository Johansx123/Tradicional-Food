import { useIsEditContext, useUserContext } from '../providers/userContext';
import styles from './Banner.module.css'
import BtnDelete from './atoms/BtnDelete';
import { BtnEdit } from './atoms/BtnEdit';

function Banner() {
    const user = useUserContext();
  const allowEdit = useIsEditContext();
  return (
    <figure className={styles.Banner}>
        {allowEdit && user ? (
                <span 
                  className={styles.Overlay}
                >
                    
                  <BtnEdit onClick={() => {}} size={48} />
                  <BtnDelete onClick={() => {}} size={48}/>
                </span>
        ) : null}
        
        <img src="../../public/images/DSC_4063 1.jpg" alt="Banner" />
    </figure>
  )
}
export default Banner