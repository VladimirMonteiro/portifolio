import styles from './Technologies.module.css'

//icons
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {BiLogoNodejs} from 'react-icons/bi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoMongodb} from 'react-icons/bi'
import {SiMysql} from 'react-icons/si'
import {DiGit} from 'react-icons/di'


const Technologies = ()=> {

    return(
        <section id='technologies' className={styles.cardlist_container}>
            <div className={styles.header_container}>
                <h2>Technologies</h2>
                <p>skills in the following technologies</p>
            </div>
            
           <div className={styles.card_container}>

               <div className={styles.card}>
                    <div style={{color: 'rgb(255, 165, 0)'}} className={styles.icon}>
                        <AiFillHtml5/>
                        
                    </div>
                    <h3>HTML5</h3>
               </div>
               <div className={styles.card}>
                    <div style={{color: 'rgb(0, 0, 255)'}} className={styles.icon}>
                        <BiLogoCss3/>
                        
                    </div>
                    <h3>CSS3</h3>
               </div>
               <div className={styles.card}>
                    <div style={{color: '#FFE008'}} className={styles.icon}>
                        <BiLogoJavascript/>
                        
                    </div>
                    <h3>Javascript</h3>
               </div>
               <div className={styles.card}>
                    <div style={{color: '#88C249'}} className={styles.icon}>
                        <BiLogoNodejs/>
                        
                    </div>
                    <h3>NodeJS</h3>
               </div>
               <div className={styles.card}>
                    <div style={{color: '#00D3F6'}} className={styles.icon}>
                        <BiLogoReact/>
                        
                    </div>
                    <h3>ReactJS</h3>
               </div>
               <div className={styles.card}>
                    <div style={{color: '#419432'}} className={styles.icon}>
                        <BiLogoMongodb/>
                        
                    </div>
                    <h3>MongoDB</h3>
               </div>
               <div className={styles.card}>
                    <div style={{color: '#2A6F93'}} className={styles.icon}>
                        <SiMysql/>
                        
                    </div>
                    <h3>MySQL</h3>
               </div>
               <div className={styles.card}>
                    <div style={{color: '#F35530'}} className={styles.icon}>
                        <DiGit/>
                        
                    </div>
                    <h3>Git</h3>
               </div>


           </div>
        </section>

    )
}

export default Technologies