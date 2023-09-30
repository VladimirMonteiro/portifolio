import styles from './ContainerOne.module.css'
import mainImage from '../../assets/computer.jpg'
import TypingEffect from '../effects/TypingEffect'
import {Link} from 'react-scroll'


const ContainerOne = ()=> {
    return(


        
        <section id='container_01' style={{backgroundImage: `url(${mainImage})`}} className={styles.main_container}>
    
            <div>
    
                <h1>
                    I am Vladimir Monteiro
                    <TypingEffect text='Fullstack developer'/>
                </h1>
            </div>


        </section>

    )
}


export default ContainerOne