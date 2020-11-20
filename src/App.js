import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const App = () => (
< >

<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="tu-imagen.jpg" alt="tu imagen" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="https://ed.team" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  <Curso 
  title="React desde cero"
  image="https://edteam-media.s3.amazonaws.com/courses/medium/e7fbb7f9-773c-426a-bbb5-14276a37af33.png"
  price="30 usd"
  profesor="Beto Quiroga"
  />

  <Curso 
  title="Python desde cero 2020"
  image="https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png"
  price="90 usb"
  profesor="Alvaro Felipe"
  />
  
  <Curso 
  // title="Python desde cero 2020"
  // image="https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png"
  // price="90 usb"
  // profesor="Alvaro Felipe"
  />
</div>

</>

)

export default App;
