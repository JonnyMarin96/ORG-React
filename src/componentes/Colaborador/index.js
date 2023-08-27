import "./Colaborador.css"
import { TiDelete } from "react-icons/ti"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, LikeIt} = props

    return <div className="colaborador">
        <TiDelete onClick={ () => eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => {LikeIt(id)}}/> : <AiOutlineHeart onClick={() => {LikeIt(id)}}/> }
        </div>
    </div>
}

export default Colaborador