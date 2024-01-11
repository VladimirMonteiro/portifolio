
import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Container from './components/container/Container'
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <div className="App">
      <Navbar />
      <ScrollToTop/>

     
        <Outlet />

    



      <Footer />
    </div>
  )
}

export default App
