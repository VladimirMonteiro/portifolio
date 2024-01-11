import style from './BackgroundImage.module.css'



const BackgroundImage = ({image, width, height, color, children})=> {
    return(

    
            
                <div className={style.image_container} style={{backgroundImage: `url(${image})`, width: `${width}`, minHeight: `${height}`}}>
                    <div className={style.overlay} style={{width: `${width}`, minHeight: `${height}`, backgroundColor: `${color}`}}>
                        {children}

                    </div>
                </div>
    
      

    )
}

export default BackgroundImage