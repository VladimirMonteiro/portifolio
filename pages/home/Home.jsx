import { Link } from 'react-scroll'

//images
import background from '../../src/assets/ambiente-de-trabalho.jpg'
import background02 from '../../src/assets/background_contact.jpg'



//components
import ContainerOne from '../../src/components/main_container/ContainerOne'
import About from '../../src/components/about/About'
import Technologies from '../../src/components/techologies/Technologies'
import Projects from '../../src/components/projects/Projects'
import BackgroundImage from '../../src/components/backgroundImage/BackgroundImage'
import Contact from '../../src/components/contact/Contact'




const Home = () => {

    return (
        <div className="container_home">
          
            <ContainerOne />
            <About />
            <Technologies />
            <BackgroundImage image={background} width='100%' height='250px' color='#2072c983' />
            <Projects />
            <BackgroundImage image={background02} width='100%' height='650px' color='#2072c983'>
                <Contact />
            </BackgroundImage>
           


        </div>

    )
}

export default Home