import { Link } from 'react-router-dom';
import './Home.css';

// Arreglo que contiene los navs
const navLinks = [
    { title: 'Inicio', path: '/inicio' },
    { title: 'Agenda de turnos', path: '/agenda_turnos' },
    { title: 'Fichas Clínicas', path: '/fichas_clinicas' },
    { title: 'Sobre nosotros', path: '/sobre_nosotros' },
];

const HomeView = () => {
    return (
        <header className='navbar'>
            <div className='navbar-brand'>
                <h1>Vida Salud Pública</h1>
            </div>
            <nav className='navbar-menu'>
                <ul className='navbar-links'>

                    {navLinks.map((link, index) => (
                        <li key={index} className='navbar-item'>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default HomeView