import icon from './img/icon.png'
import styles from './Nav.module.css'

function Nav(){
    
    return(
        <header className={styles.Logo}>
            <img src={icon} alt="Logo Raio" title="Logo Raio"/>
            <p>Energia Solar</p>
        </header>
    )
}


export default Nav