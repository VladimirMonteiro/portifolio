import styles from './Contact.module.css'
import computerImage from '../../assets/image_container.jpg'

import { useState, useEffect } from 'react'

const Contact = ()=> {

    const [contact, setContact] = useState({name: '', email: '', subject: '', description: ''})
    const [error, setError] = useState({})


    const handleChange = (e)=> {
        setContact({...contact, [e.target.name]: e.target.value})

    }

    const handleSubmit= (e)=> {
        e.preventDefault()

        let errors = {}


        if(contact.name.trim() === ''){
            errors.name = "the name is mandatory."
            
        }

        if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
        errors.email = 'provide a valid email.';
        }

        if(contact.subject.trim() === ''){
            errors.subject = "mandatory subject."
        }

        if(contact.description.trim() === ''){
            errors.description = "the message is mandatory."
        }

        setError(errors)

        if(Object.keys(errors).length === 0){

            //send form to backend
            //...
            
            setContact({name: '', email: '', subject: '', description: ''})
            console.log('form enviado');
            return true

        }
        console.log('form n enviado')

        return false
       
    

       
    }

    return(
        <section id="contact"className={styles.contact_container}>
            <div className={styles.form_container}>
            <h1><span>Send Message Us</span></h1>
                
                <form onSubmit={handleSubmit}>
                    <div>
                        {error.name && <p className={styles.error_input}>{error.name}</p>}
                        <input type="text" name="name" id="name" placeholder='Your name'  onChange={handleChange} value={contact.name}/>
                        
                    </div>
                    <div>
                        {error.email && <span className={styles.error_input}>{error.email}</span>}
                        <input type="email" name="email" id="email" placeholder='Your e-mail' onChange={handleChange} value={contact.email}/>
                      
                    </div>
                    <div>
                        {error.subject && <span className={styles.error_input}>{error.subject}</span>}
                        <input type="text" name="subject" id="subject" placeholder='Subject' onChange={handleChange} value={contact.subject} />
                       
                    </div>
                    {error.description && <p className={styles.error_input}>{error.description}</p>}
                    <textarea name="description" id="" cols="30" rows="10" placeholder='Message' onChange={handleChange} value={contact.description}>

                    </textarea>
                
                    <input type="submit" value="Send message" />
                </form>
                

            </div>
            <div className={styles.contact_details}>
                    <div className={styles.image} style={{backgroundImage: `url(${computerImage})`}}>

                    </div>
            </div>

        </section>
    )
}

export default Contact