import styles from './ProjectCard.module.css'

import { Link } from 'react-router-dom'

const ProjectCard = ({image, projectName, done}) => {

    return(
        <div className={done ? styles.project_card : styles.project_card_false}>
            {done ? (
                <>
                <Link to={`/projetos/${projectName}`}>
                    <div className={styles.image} style={{backgroundImage: `url(${image})`}}></div>
                </Link>
                
                </>

            ) : (
                <div>
                    <span>shortly...</span>
                </div>
            )}

        </div>
    )
}

export default ProjectCard