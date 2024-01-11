
import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Container from './components/container/Container'
Container
function App() {


  return (
    <div className="App">
      <Navbar />

     
        <Outlet />

    



      <Footer />
    </div>
  )
}

export default App
