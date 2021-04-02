import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'
import Banner from './Banner'
import Formulario from './Formulario'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CourseGrid from './CourseGrid';
import Course from './Course';
import MainMenu from './MainMenu';
// import Course from "Course"
// import Cursosz from './Cursosz'




const App = () => (
< >

<Router>
    <MainMenu />
    <Switch>
    <Route path="/" exact component={ Banner }/>
    <Route path="/cursos/:id" component={ Course }/>
    <Route path="/cursos" component={ CourseGrid }/>
    <Route path="/formulario" component={ () => <Formulario name="Pagina de contacto" /> }/>
    <Route component={ () => (
        <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Page not found</span>
        </div>
    ) } />
    </Switch>
</Router>

</>


)

export default App;
