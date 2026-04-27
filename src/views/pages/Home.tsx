import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';



// Importa tus imágenes. Asegúrate que la ruta sea correcta.
import imagen1 from '../../assets/img/img1.jpg';
import imagen2 from '../../assets/img/img2.jpg';
import imagen3 from '../../assets/img/img3.jpg';

// Arreglo que contiene los navs
const navLinks = [
    { title: 'Inicio', path: '/inicio' },
    { title: 'Agenda de turnos', path: '/agenda_turnos' },
    { title: 'Fichas Clínicas', path: '/fichas_clinicas' },
    { title: 'Sobre nosotros', path: '/sobre_nosotros' },
    { title: 'Es un extra', path: '/extra' }
];

// Logica de las imagenes con el slider
const sliderImages = [imagen1, imagen2, imagen3];

const HomeView = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    // Efecto para escuchar el scroll y cambiar el estado del navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20); // Se activa después de 20px de scroll
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Limpieza del listener
    }, []);

    /* Logica de flechas para cambiar las imagenes que se muestran */
    // Logica para ir a la imagen anterior 
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };


    const goToNext = () => {
        const isLastSlide = currentIndex === sliderImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <div className='navbar-brand'>
                    <h1>Vida Salud Pública</h1>
                </div>
                <nav className='navbar-menu'>
                    <ul className='navbar-links'>

                        {navLinks.map((link) => (
                            <li
                                key={link.path}
                                className='navbar-item'
                            >
                                <Link to={link.path} className='navbar-link'>
                                    <span className='navbar-link-text'>{link.title}</span>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            </header>

            {/* Seccion para interaccion con los botones de ir hacia adelante o atras en las imagenes */}
            <section className='slider-container'>
                <button onClick={goToPrevious} className='slider-arrow left-arrow'>
                    &#10094;
                </button>

                <div className='slider-image-container'>
                    <img key={currentIndex} src={sliderImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='slider-image' />
                </div>

                <button onClick={goToNext} className='slider-arrow right-arrow'>
                    &#10095;
                </button>
            </section>
        </>
    )
}

export default HomeView