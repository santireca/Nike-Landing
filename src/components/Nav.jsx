import { headerLogo } from '../assets/images'
// import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {

    const [darkMode, setDarkMode] = useState(false)
    // const [modal, setModal] = useState(false)

    // const handleOpenModal = () => {
    //     setModal(true)
    // }

    // const handleCloseModal = () => {
    //     setModal(false)
    // }

    const handleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        setDarkMode(!darkMode)
    }

    return (
        <header
            className=' padding-x py-8 absolute z-10 w-full'
        >
            <nav
                className=' flex justify-between items-center max-container'
            >
                <a href="/">
                    <img 
                        src={headerLogo}
                        alt="Logo" 
                        width={130}
                        height={29}
                    />
                </a>
                <ul
                    className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'
                >
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a 
                                    href={item.href}
                                    className=' font-montserrat leading-normal text-lg text-slate-gray dark:text-white-400 hover:text-coral-red dark:hover:text-coral-red transition duration-200' 
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                {
                    darkMode ? (
                        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1692662578/icons8-cuarto-menguante-96_t2ty7g_sx7zov.webp" alt="" className=" w-8 h-8 cursor-pointer hover:scale-105 transition duration-300" onClick={handleDarkMode}/>
                    ) : (
                        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1692662578/icons8-weather-240_gm0gaz_ppltli.webp" alt="" className=" w-8 h-8 cursor-pointer hover:scale-105 transition duration-300" onClick={handleDarkMode}/>
                    )
                }
                {/* <div
                    className=' hidden max-lg:block'
                >
                    <img 
                        src={hamburger}
                        alt='Hamburger' 
                        width={25}
                        height={25}
                    />
                </div> */}
            </nav>
        </header>
    )
}

export default Nav