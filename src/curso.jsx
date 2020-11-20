import React from 'react'

const Curso = ({title, image, price, profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image ? image : "https://www.wpextremo.com/wp-content/uploads/2019/11/500-internal-server-error-featured-image-1.png"} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title ? title : "No existe el titulo"}</h3>
            <div className="s-main-center">
                {profesor ? `Profe : ${profesor}` : "Tu nombre va aquí !!!" }
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price ? price : "Define el precio del curso"}`}</a>
            </div>
        </div>
    </article>
)

export default Curso;