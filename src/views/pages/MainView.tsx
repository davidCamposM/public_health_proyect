import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import '../../styles/Form.css'
import '../../styles/Services.css'

// Servicios existentes
const services = [
    {
        title: 'Atención primaria',
        text: 'Accede a orientación médica inicial, seguimiento preventivo y derivación oportuna para cuidar tu salud de forma continua.'
    },
    {
        title: 'Programas de bienestar',
        text: 'Encuentra actividades y recursos para nutrición, salud mental y actividad física con acompañamiento profesional.'
    },
    {
        title: 'Red de apoyo comunitario',
        text: 'Conecta con servicios locales, jornadas de salud y campañas informativas pensadas para tu comunidad.'
    },
    {
        title: 'Telemedicina',
        text: 'Servicio desarrollado para atención general con alta capacidad tecnologica para identificar su dolencia.'
    },
    {
        title: 'Exámenes de laboratorio',
        text: 'Toma de muestras y análisis clínicos con resultados rápidos y confiables para un diagnóstico preciso.'
    },
    {
        title: 'Atención de especialidades',
        text: 'Consulta con médicos especialistas en diversas áreas para un tratamiento enfocado y resolutivo.'
    }
]

// Caracteristicas de formula

interface DatosFormOpciones {
    idPaciente: string[];
    numeroTelefono: string[];
    correo: string[];
    sucursal: string[];
    especialidad: string[];
    nombreEspecialidad: string[];
}

type DatosFormSeleccion = {
    [K in keyof DatosFormOpciones]: string;
};

const opciones: DatosFormOpciones = {
    idPaciente: ['Rut1', 'Rut2', 'Rut3'],
    numeroTelefono: ['Telefono1', 'Telefono2', 'Telefono3'],
    correo: ['Correo1', 'Correo2', 'Correo3'],
    sucursal: ['Sucursal1', 'Sucursal2', 'Sucursal3'],
    especialidad: ['Especialidad1', 'Especialidad2', 'Especialidad3'],
    nombreEspecialidad: ['NombreEsp1', 'NombreEsp2', 'NombreEsp3']
}

const estadoInicial: DatosFormSeleccion = {
    idPaciente: '',
    numeroTelefono: '',
    correo: '',
    sucursal: '',
    especialidad: '',
    nombreEspecialidad: ''
}

const MainView = () => {


    const [formData, setFormData] = useState<DatosFormSeleccion>(estadoInicial)

    // Logica para renderizar cada titulo y su campo en el formulario
    const renderGrupo = (titulo: string, campo: keyof DatosFormSeleccion, clase?: string) => {
        
        return (
            <fieldset className={clase}>
                <legend>{titulo}</legend>
                <select
                    value={formData[campo]}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            [campo]: e.target.value
                        })
                    }
                >
                    <option value=''> Seleccione una opcion</option>
                    {opciones[campo].map((valor) => (
                        <option key={`${campo}-${valor}`} value={valor}>
                            {valor}
                        </option>
                    ))}
                </select>
            </fieldset>
        )
    }

    // Method: Recorrer cada servico disponible
    // Ir a la imagen posterior
    // Ir a la imagen anterior
    // Manejar esto a traves de indices

    const [indexCurrent, indexUpdate] = useState(0);



    const goToNext = () => {
        const newIndex = (indexCurrent + 3) >= services.length ? 0 : indexCurrent + 3;
        indexUpdate(newIndex);
    }

    const goToPrevious = () => {
        const newIndex = (indexCurrent - 3) < 0 ? services.length - 3 : indexCurrent - 3;
        indexUpdate(newIndex);
    }

    // LOGICA SERVICIOS DISPONIBLES
    return (
        <div className="main-container">
            <div className="main-title-container">
                <h1 className="main-page-title">Servicios disponibles</h1>
            </div>

            <div className="main-services-grid">
                {services.slice(indexCurrent, indexCurrent + 3).map((block, index) => (
                    <article
                        className="main-center-block fade-in"
                        key={block.title}
                        style={{ animationDelay: `${index * 0.10}s` }}
                    >
                        <h2 className="main-title">{block.title}</h2>
                        <section className="main-text">{block.text}</section>
                    </article>
                ))}
            </div>

            <section className='section-button-services'>
                <button className='button-services-left' onClick={goToPrevious}>
                    <ArrowLeft size={18} /> Anterior
                </button>
                <button className='button-services-right' onClick={goToNext}>
                    Siguiente <ArrowRight size={18} />
                </button>
            </section>


            {/* FORMULARIO */}
            <form className='main-form'>
                <h2 className='main-form-title'>Hora Médica</h2>
                {renderGrupo('ID Paciente', 'idPaciente')}
                {renderGrupo('Número Teléfono', 'numeroTelefono')}
                {renderGrupo('Correo', 'correo')}
                {renderGrupo('Especialidad', 'especialidad')}
                {renderGrupo('Sucursal', 'sucursal', 'main-field-below-correo')}
                {renderGrupo('Nombre Especialidad', 'nombreEspecialidad')}
                <div className='main-submit-row'>
                    <input type='submit' value='Enviar' />
                </div>
            </form>
        </div>
    )
}

export default MainView
