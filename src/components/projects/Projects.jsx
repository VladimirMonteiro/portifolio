import styles from './Projects.module.css'

import ProjectCard from '../projectCard/ProjectCard'

const Projects = ()=> {
    return(

        <section id="projects"className={styles.container}>
            <div className={styles.header_projects}>
                <h2>Projects</h2>
                <p>projects carried out</p>
            </div>
            <div className={styles.projects_container}>
                <ProjectCard done={false}/>
                <ProjectCard done={false}/>
                <ProjectCard done={false}/>
            </div>

        </section>
    )
}

export default Projects