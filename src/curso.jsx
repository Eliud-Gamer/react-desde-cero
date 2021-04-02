import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import Cursosz from './Cursosz.jsx'

const Curso = ({id, title, image, price, profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
            <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {`Profe : ${profesor} `}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
)


Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontro titulo",
    image: "https://www.wpextremo.com/wp-content/uploads/2019/11/500-internal-server-error-featured-image-1.png",
    price: "00",
    profesor: "Tu nombre va aqui"
}


export default Curso;