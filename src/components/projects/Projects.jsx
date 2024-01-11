import styles from './Projects.module.css'

import ProjectCard from '../projectCard/ProjectCard'

//images

import upLocaçoes from '../../assets/teste3.png'

const Projects = ()=> {
    return(

        <section id="projects"className={styles.container}>
            <div className={styles.header_projects}>
                <h2>Projects</h2>
                <p>projects carried out</p>
            </div>
            <div className={styles.projects_container}>
                <ProjectCard done={true} image ={upLocaçoes} projectName='up_locacoes'/>
                <ProjectCard done={false}/>
                <ProjectCard done={false}/>
            </div>

        </section>
    )
}

export default Projects