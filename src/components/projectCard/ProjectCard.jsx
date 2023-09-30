import styles from './ProjectCard.module.css'

const ProjectCard = ({image, projectName, done}) => {

    return(
        <div className={done ? styles.project_card : styles.project_card_false}>
            {done ? (
                <>
                <div style={{backgroundImage: `url(${image})`}}>
                    
                </div>
                <div>
                    <h2>{projectName}</h2>
                </div>
                
                
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