import React from "react"
import { Link } from "react-router-dom"

// const MainMenu = () => (
//     <header className="main-header">
//         <div className="ed-grid s-grid-5 lg-grid-4">
//             <div className="s-cols-4 lg-cols-1 s-cross-center">
//                 <a href="/">
//                     <img className="main-logo" src="https://ed.team/static/images/logo.svg" alt="Logo EDteam"/>
//                 </a>
//             </div>
//             <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links"></div>
//             <nav className="main-menu" id="main-menu">
//                 <ul>
//                     <li><Link to="/"> Inicio </Link></li>
//                     <li><Link to="/cursos"> Cursos </Link></li>
//                     <li><Link to="/formulario"> Formulario </Link></li>
//                 </ul>
//             </nav>
//             <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
//         </div>
//     </header>
// )

const MainMenu = () => (
<header className="ed-header s-bg-grey s-py-2" >
    <div className="ed-grid lg-grid-5">
        <div className="s-cross-center s-main-center lg-main-start">
            <img className="logo" src="https://ed.team/static/images/logo.svg" />
        </div>
        <nav className="nav lg-cols-4 s-cross-center ed-grid full">
        <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
            <li className="lg-mr-3">
            <Link className="link s-column s-cross-center active" to="/">
                <svg className="icon to-lg s-mb-0">
                <use href="#home"></use>
                </svg>
                <span>Inicio</span>
            </Link>
            </li>
            <li className="lg-mr-3">
            <Link className="link s-column s-cross-center" to="/cursos">
                <svg className="icon to-lg s-mb-0">
                <use href="#studies"></use>
                </svg>
                <span>Cursos</span>
            </Link>
            </li>
            <li className="lg-mr-3">
            <Link className="link s-column s-cross-center" to="/formulario" >
                <svg className="icon to-lg s-mb-0">
                <use href="#courses"></use>
                </svg>
                <span>Formulario</span>
            </Link>
            </li>
            <li>
            <Link className="link s-column s-cross-center" to="/erer" >
                <svg className="icon to-lg s-mb-0">
                <use href="#notes"></use>
                </svg>
                <span>Error 404</span>
            </Link>
            </li>
        </ul>
        </nav>
    </div>
    </header>
)

export default MainMenu;