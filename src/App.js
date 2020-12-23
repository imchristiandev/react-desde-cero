import './styles/styles.scss';
import Curso from './curso';

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://image.freepik.com/vector-gratis/fondo-ciudad-noche-luces-neon_1441-2822.jpg" alt="banner"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos de EDteam</p>
          <p>Tu futuro te está esperando</p>
          <a href="https://ed.team" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
    <Curso/>
    <Curso/>
    <Curso/>
    <Curso/>
    <Curso/>
    <Curso/>
  </div>
  </>
)


export default App;

// Reglas JSX

// 1. Toda etiqueta debe cerrarse
// 2. Los componentes deben devolver un solo elemento padre
// 3. Apoyarse de los fragments cuando necesito devolver dos o más elementos 
// 4. <Fragment> Hijos </Fragment> = <> Hijos </>
// 5. img siempre se cierra <img src="url" />
// 6. class => className
// 7. for => htmlFor
// 8. NO if, else, while