import style from './BackgroundImage.module.css'



const backgroundImage = ({image, width, minHeight, children})=> {
    return(

    
            
                <div className={style.image_container} style={{backgroundImage: `url(${image})`, width: `${width}`, minHeight: `${minHeight}`}}>
                    <div className={style.overlay} style={{width: `${width}`, minHeight: `${minHeight}`}}>
                        {children}

                    </div>
                </div>
    
      

    )
}

export default backgroundImage