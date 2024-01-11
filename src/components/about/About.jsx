import styles from './About.module.css'
import myPhoto from '../../assets/myPhoto.jpg'

import {BsFacebook} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const About = ()=> {

    return(
        <section id="about"className={styles.about_container}>
            <div  className={styles.about_details}>
                <div className={styles.about_contact}>
                    <div>
                        <div className={styles.about_image} style={{backgroundImage: `url(${myPhoto})`}}>

                        </div>
                    </div>
                    <div>
                        <ul>
                            <li><span>Name:</span> Vladimir Monteiro Souza de Lima</li>
                            <li><span>Profile:</span> Fullstack Developer</li>
                            <li><span>Contact:</span> vladimir.monteiro021@gmail.com</li>
                            <li><span>Phone:</span> (51)99500-5018</li>
                        </ul>

                    </div>
                    <div className={styles.redes}>
                    <ul>
                        <li><a href="https://www.facebook.com/vladimir.monteiro.54" target='_blanck'><BsFacebook/></a></li>
                        <li><a href="https://www.instagram.com/vladimir.monteiro.21/" target='_blanck'><BsInstagram/></a></li>
                        <li><a href="https://github.com/VladimirMonteiro" target='_blanck'><AiFillGithub/></a></li>
                        <li><a href="https://www.linkedin.com/in/vladimir-monteiro/" target='_blanck'><AiFillLinkedin/></a></li>
                    </ul>

                    </div>

                </div>
                <div className={styles.about_text}>
                    <h2><span>Sobre mim</span></h2>
                    <p>Desde que me interessei por programação, estudo diariamente para conseguir minha primeira oportunidade. Há 8 meses venho desenvolvendo diversos projetos para colocar em prática todo meu conhecimento e tenho certeza que estou pronto para integrar seu time de programadores. Tenho facilidade de aprendizado, boa comunicação e a todo momento procuro melhorar cada vez mais</p>

                </div>

            </div>

        </section>
    )
}


export default About