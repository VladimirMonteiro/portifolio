import styles from './Navbar.module.css'
import { Link as LinkScroll } from 'react-scroll'
import { Link, useLocation } from 'react-router-dom'


import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'


const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const location = useLocation();
    console.log(location)

    function handleOnClick() {
        if (menu == false) {
            setMenu(true)
        }
        else if (menu == true) {
            setMenu(false)
        }
        console.log(menu)
    }


    return (

        <header className={styles.navbar}>

            <div>
                <h1 style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Portifólio</h1>
            </div>
            <nav className={styles.menu_desktop}>
                <ul>
                    {location.pathname.includes('projetos') ? (<li><span>
                    <Link to='/' >Home</Link>
                    </span></li>) : (<li><span><LinkScroll activeClass="active" to="container_01" spy={true} smooth={true} offset={-70} duration={500}>Home</LinkScroll></span></li>)}

                    {location.pathname.includes('projetos') ? (<li><span><Link to='/'>About</Link></span></li>) : (<li><span><LinkScroll activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</LinkScroll></span></li>)}

                    {location.pathname.includes('projetos') ? (<li><span><Link to='/'>technologies</Link></span></li>) : (<li><span><LinkScroll activeClass="active" to="technologies" spy={true} smooth={true} offset={-70} duration={500}>technologies</LinkScroll></span></li>)}

                    {location.pathname.includes('projetos') ? (<li><span><Link to='/'>Projects</Link></span></li>) : (<li><span><LinkScroll activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</LinkScroll></span></li>)}


                    {location.pathname.includes('projetos') ? (
                    <li><span><Link to='/'>Contact</Link></span></li>) : (
                    <li><span><LinkScroll activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</LinkScroll></span></li>)}

                </ul>
            </nav>
            <nav className={styles.menu_mobile} >
                <div>
                    {menu ? (
                        <div className={styles.menu_mobile_done}>

                            <div className={styles.icon_menu}>
                                <AiOutlineClose onClick={handleOnClick} />
                            </div>
                            <div className={styles.list_menu_mobile}>
                                <nav>
                                    <ul>
                                        {location.pathname.includes('projetos') ? (<li><span>
                                        <Link to='/' >Home</Link>
                                        </span></li>) : (<li><span><LinkScroll  onClick={handleOnClick} activeClass="active" to="container_01" spy={true} smooth={true} offset={-70} duration={500}>Home</LinkScroll></span></li>)}

                                        {location.pathname.includes('projetos') ? (<li><span><Link to='/'>About</Link></span></li>) : (<li><span><LinkScroll  onClick={handleOnClick}activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</LinkScroll></span></li>)}

                                        {location.pathname.includes('projetos') ? (<li><span><Link to='/'>technologies</Link></span></li>) : (<li><span><LinkScroll onClick={handleOnClick}activeClass="active" to="technologies" spy={true} smooth={true} offset={-70} duration={500}>technologies</LinkScroll></span></li>)}

                                        {location.pathname.includes('projetos') ? (<li><span><Link to='/'>Projects</Link></span></li>) : (<li><span><LinkScroll  onClick={handleOnClick}activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</LinkScroll></span></li>)}


                                        {location.pathname.includes('projetos') ? (
                                        <li><span><Link to='/'>Contact</Link></span></li>) : (
                                        <li><span><LinkScroll onClick={handleOnClick} activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</LinkScroll></span></li>)}

                                    </ul>
                                </nav>




                            </div>



                        </div>
                    ) : (<GiHamburgerMenu className={styles.icon_menu} onClick={handleOnClick} />)}

                </div>

            </nav>

        </header>
    )
}


export default Navbar