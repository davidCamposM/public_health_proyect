
import { useState } from 'react'
import './MainView.css'

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

    // Logica para renderizar cada titulo y su campo en el formularip
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

    return (
        <div className="main-container">
            <div className="main-title-container">
                <h1 className="main-page-title">Servicios disponibles</h1>
            </div>

            <div className="main-services-grid">
                {services.map((block, index) => (
                    <article
                        className="main-center-block"
                        key={block.title}
                        style={{ animationDelay: `${index * 0.10}s` }}
                    >
                        <h2 className="main-title">{block.title}</h2>
                        <section className="main-text">{block.text}</section>
                    </article>
                ))}
            </div>

            <form className='main-form'>
                <h2 className='main-form-title'>Formulario inmediato</h2>
                {renderGrupo('ID Paciente', 'idPaciente')}
                {renderGrupo('Número Teléfono', 'numeroTelefono')}
                {renderGrupo('Correo', 'correo')}
                {renderGrupo('Especialidad', 'especialidad')}
                {renderGrupo('Sucursal', 'sucursal', 'main-field-below-correo')}
                {renderGrupo('Nombre Especialidad', 'nombreEspecialidad')}
                <div className='main-submit-row'>
                    <input type='submit' value='submit' />
                </div>
            </form>
        </div>
    )
}

export default MainView
