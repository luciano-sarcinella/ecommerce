import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { Modal } from './Modal'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { productoAdded } from '../../utils/carritoSlice'




export const ProductoCard = (props) => {
  const { titulo, precio, url, id } = props;
  const [showModal, setShowModal] = useState(false);
  const cuadrilla = useSelector(state => state.grid.value)
  const dispatch = useDispatch()

    
  const handleComprar = () => {
    dispatch(
      productoAdded({
        titulo,
        precio,
        url,
        id,
        value:1
      })
    )
  }

  let content = <>
    <div className="product text-center">
      <div className="position-relative mb-3">
        <Link className="d-block" to={`/productos/${id}`}><img className="img-fluid w-100" src={url} alt={titulo}/></Link>
        <div className="product-overlay">
          <ul className="mb-0 list-inline">
            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
            <li className="list-inline-item m-0 p-0"><Link  className="btn btn-sm btn-dark rounded-0" onClick={handleComprar}>Comprar</Link></li>
            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0"  href="#!" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faExpand}/></a></li>
          </ul>
        </div>
      </div>
      <h6> <Link className="reset-anchor" to={`/productos/${id}`}>{titulo}</Link></h6>
      <p className="small text-muted">$ {precio}</p>
    </div>

    {showModal && (
      <Modal
        titulo={titulo}
        precio={precio}
        url={url}
        key = {id}
        id = {id}
        onClose={() => setShowModal(false)}
      />
    )}
  </>

  if(cuadrilla === 'large'){
    return(
      <div className="col-lg-4 col-sm-6">
        {content}
      </div>

    )
  }
  return(
    <div className="col-lg-3 col-sm-6">
      {content}
    </div>
  )
  
}