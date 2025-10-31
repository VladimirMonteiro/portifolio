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
                    <p>Sou desenvolvedor de software atualmente cursando 5° semestre de análise e desenvolvimento de sistemas, possuo cursos e habilidades em Javascript, React, Nodejs. Java. Possuo experiência tanto no front end como no backend desenvolvendo API rest com Java Spring Boot e nodeJS. Atualmente estou estudando e aperfeiçoando minhas habilidades afim de entregar softwares confiáveis e performáticos.</p>
                </div>

            </div>

        </section>
    )
}


export default About