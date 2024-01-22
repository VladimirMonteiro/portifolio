import styles from './Projects.module.css'

import ProjectCard from '../projectCard/ProjectCard'

//images

import upLocaçoes from '../../assets/teste3.png'
import reactGram from '../../assets/reactGram.png'

const Projects = ()=> {
    return(

        <section id="projects"className={styles.container}>
            <div className={styles.header_projects}>
                <h2>Projetos</h2>
                <p>Projetos realizados</p>
            </div>
            <div className={styles.projects_container}>
                <ProjectCard done={true} image ={upLocaçoes} projectName='Up-Locacoes'/>
                <ProjectCard done={true} image={reactGram} projectName='ReactGram'/>
                <ProjectCard done={false}/>
            </div>

        </section>
    )
}

export default Projects