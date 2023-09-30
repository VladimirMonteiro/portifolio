import {Link} from 'react-scroll'

//images
import background from './assets/ambiente-de-trabalho.jpg'
import background02 from './assets/background_contact.jpg'


//components
import Navbar from './components/navbar/Navbar'
import ContainerOne from './components/main_container/ContainerOne'
import About from './components/about/About'
import Technologies from './components/techologies/Technologies'
import Projects from './components/projects/Projects'
import BackgroundImage from './components/backgroundImage/BackgroundImage'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {


  return (
    <div className="App">
      <Navbar/>
      <ContainerOne/>
      <About/>
      <Technologies/>
      <BackgroundImage image={background} width='100%' minHeight='250px'/>
      <Projects/>
      <BackgroundImage image={background02} width='100%' minHeight='650px'>
        <Contact/>
      </BackgroundImage>
      <Footer/>


    </div>
  )
}

export default App
