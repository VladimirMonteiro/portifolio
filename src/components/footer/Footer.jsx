import styles from './Footer.module.css'
 
import {BsFacebook} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = ()=> {
    
    return(
        <footer className={styles.footer}>
            <ul>
                <li><a href="https://www.facebook.com/vladimir.monteiro.54" target='_black'><BsFacebook/></a></li>
                <li><a href="https://www.instagram.com/vladimir.monteiro.21/" target='_black'><BsInstagram/></a></li>
                <li><a href="https://github.com/VladimirMonteiro" target='_black'><AiFillGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/vladimir-monteiro/" target='_black'><AiFillLinkedin/></a></li>
            </ul>

            <p>&copy;Copyright Vladimir. All Rights Reserved</p>

        </footer>
    )
}

export default Footer