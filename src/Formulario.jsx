import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            nombre: "",
            correo: "",
            num1: "",
            num2: "",
            // resulta: "",
        }

        this.numero1 = this.numero1.bind(this)
        this.numero2 = this.numero2.bind(this)
        // this.resultado = this.resultado.bind(this)
    }

    numero1(e) {
        this.setState({
            num1: e.target.value
        })
    }

    numero2(e) {
        this.setState({
            num2: e.target.value
        })
    }



    // this.setstatee

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="ed-grid m-grid-2">
                    {/* <div className="form__item">
                            <label>Nombre completo</label>
                            <input type="text" 
                            onChange={this.cambiarNombre}/>
                        </div>
                        <div className="form__item">
                            <label>Correo electronico</label>
                            <input type="email" 
                            onChange={this.cambiarCorreo}/>
                        </div> */}
                    <div className="form__item">
                            <label>Primer numero</label>
                            <input type="number" 
                            onChange={ this.numero1 }/>
                        </div>
                        <div className="form__item">
                            <label>Segundo numero</label>
                            <input type="number" 
                            onChange={ this.numero2 }/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}, espero tengas un buen dia.`}</h2>
                    <p>{`En tu correo de ${this.state.correo} te hemos enviado un mensaje de confirmacio`}</p>
                    {/* <span>{`Tu suma de ${this.state.num1} con ${this.state.num2}`}</span> */}
                    <span>{`Multiplicacion: ${this.state.num1} por ${this.state.num2}`}</span>
                    <p >{`el resultado es ` + this.state.num1/this.state.num2}</p>
                </div>
            </div>
        )
    }
}


export default Formulario;