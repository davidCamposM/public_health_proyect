
import './MainView.css'

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

const MainView = () => {
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


            <div className="main-form">



            </div>
        </div>
    )
}

export default MainView
