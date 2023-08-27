import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Crear colaborador nuevo</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Crear Equipo nuevo</h2>
            <Campo
                titulo="Nombre de equipo"
                placeholder="Ingresar nombre de equipo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                type="color"
                placeholder="Ingresar color en HEX (#XXXXXX)"
                required
                valor={color}
                actualizarValor={actualizarColor}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario