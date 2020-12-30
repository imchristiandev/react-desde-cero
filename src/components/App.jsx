import '../styles/styles.scss';

import Form from './Pages/Form';
import CourseGrid from './Organisms/CourseGrid';
import Header from './Organisms/Header';
import Course from './Pages/Course';
import History from './Pages/History';
import Home from './Pages/Home';
import Users from './Pages/Users';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact component={ Home }/>
      <Route path="/cursos/:id" component={ Course }/>
      <Route path="/cursos" component={ CourseGrid }/>
      <Route path="/historial/:id" component={ History }/>
      <Route path="/historial" component={ History }/>
      <Route path="/formulario" component={() => <Form name="Página de contacto"/>}/>
      <Route path="/usuarios" component={ Users }/>
      <Route component={() => (
        <div className="ed-grid">
          <h1>Página 404</h1>
          <span>Página no encontrada</span>
        </div>
      )}/>
    </Switch>
  </Router>
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