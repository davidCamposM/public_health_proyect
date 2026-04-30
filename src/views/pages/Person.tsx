import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";


import '../../styles/Person.css'

// Importacion de imagenes
import img_atencion_primaria from "../../assets/img/img6.jpg"
import img_bienestar from "../../assets/img/img11.jpg"
import img_apoyo_salud from "../../assets/img/img12.jpg"


// TODO: SIGUIENTE APARTADO PARA DEFINIR LOS PROFESIONALES QUE TRABAJAN EN LA CLINICA
const person = [
  {
    person: "Atencion Primaria",
    text: "Texto de ejemplo",
    image: img_atencion_primaria

  },

  {
    person: "Bienestar y Salud",
    text: "Texto de ejemplo",
    image: img_bienestar
  },

  {
    person: "Apoyo como Salud Primordial",
    text: "Texto de ejemplo",
    image: img_apoyo_salud
  },


];

const ViewPerson = () => {

// APLICAR EL USESTATE REACT

const [indexCurrent, indexUpdate] = useState(0);
const personPerPage = 3;

    const goToNext = () => {
        const newIndex = (indexCurrent + personPerPage) >= person.length ? 0 : indexCurrent + personPerPage;
        indexUpdate(newIndex);
    }

    const goToPrevious = () => {
        const newIndex = (indexCurrent - personPerPage) < 0 ? Math.max(person.length - personPerPage, 0) : indexCurrent - personPerPage;
        indexUpdate(newIndex);
    }


  return (
    <div className="main-view-person">
      <div className="view-person">
        <h2>Nuestros Profesionales</h2>
      </div>

      <div className="div-article">

        {person.slice(indexCurrent, indexCurrent + personPerPage).map( (block, index) => (
          <article
          className="article-center-block person-fade-in"
          key={block.person}
          style={{ animationDelay: `${index * 0.10}s` }}
          >
            <h2 className="h2-title-name">{block.person}</h2>
            <img 
            className="person-image"
            src={block.image} 
            alt={block.person} />
            <section className="section-block-text">{block.text}</section>

          </article>
        ))}

      </div>

      <section className="section-button-person">
        <button className="button-person-left" onClick={goToPrevious}>
          <ArrowLeft size={18} /> Anterior
        </button>
        <button className="button-person-right" onClick={goToNext}>
          Siguiente <ArrowRight size={18} />
        </button>
      </section>

      
    </div>
  );
};

export default ViewPerson;
