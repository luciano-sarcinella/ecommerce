// import { Productos } from "./Productos";
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { small } from '../../utils/gridSlice'
import { fetchProductos, selectAllProductos } from "../../utils/productosSlice";
// import { menor} from '../../utils/ordenarSlice'
// import { getProductos,selectProductosValue } from "../../utils/ordenarSlice";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'


const ProductosList = () => {
  // const [productos ,setProductos] = useState([])
  const {pageId} = useParams()
  const dispatch = useDispatch()
  const productosStatus = useSelector(state => state.productos.status)


  useEffect(() => {
    if (productosStatus === 'idle') {
      dispatch(fetchProductos(pageId))
    }
  }, [productosStatus, dispatch,pageId])

  
  const productos = useSelector(selectAllProductos)
  console.log(productos);

  return (
      <div className="container px-lg-3">
        <div className="container">
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Productos</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item"><Link className="text-dark" to="/">Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Productos</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* BARRA LATERAL */}
                <h5 className="text-uppercase mb-4">Categorias</h5>
                  <div className="py-2 px-4 bg-dark text-white mb-3"><strong className="small text-uppercase fw-bold">Indumentaria</strong></div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/remeras">Remeras</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/buzos">Buzos</Link></li>
                  </ul>
                  <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase fw-bold">Zapatillas</strong></div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/deportivas">Deportivas</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/urbanas">Urbanas</Link></li>
                  </ul>
                  <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase fw-bold">Relojes</strong></div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5">
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/analogicos">Analogicos</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/smartwatch">SmartWatch</Link></li>
                  </ul>
                  <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase fw-bold">Electronica</strong></div>
                  <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5">
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/headphones">Headpones</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/earbuds">Earbuds</Link></li>
                    <li className="mb-2"><Link className="reset-anchor" to="/productos/speakers">Speakers</Link></li>
                  </ul>

                  <h6 className="text-uppercase mb-4">Rango de Precio</h6>
                  <div className="price-range pt-4 mb-5">
                    <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                    <div className="row pt-2">
                      <div className="col-6"><strong className="small fw-bold text-uppercase">De $500</strong></div>
                      <div className="col-6 text-end"><strong className="small fw-bold text-uppercase">A $10.000</strong></div>
                    </div>
                  </div>

                  <h6 className="text-uppercase mb-3">Mostrar Solo</h6>
                  <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="envio"/>
                    <label className="form-check-label" htmlFor="checkbox_2">Envio gratis</label>
                  </div>
                  <div className="form-check mb-1">
                    <input className="form-check-input" type="checkbox" id="llega"/>
                    <label className="form-check-label" htmlFor="checkbox_4">Llega mañana</label>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="oferta"/>
                    <label className="form-check-label" htmlFor="checkbox_6">Ofertas de la semana</label>
                  </div>
                </div>

              <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">

                <div className="row mb-3 align-items-center">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <p className="text-sm text-muted mb-0">Mostrando 12 de 61 resultados</p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                      <li className="list-inline-item text-muted me-3"><button className="btn reset-anchor rounded-0" onClick={()=>dispatch(small())}><FontAwesomeIcon icon={faTableCellsLarge}/></button></li>
                      <li className="list-inline-item">
                      <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" id="pagesDropdown" href="/" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ordenar por</Link>
                        <div className="dropdown-menu mt-3 shadow-sm" aria-labelledby="pagesDropdown">
                          {/* <Link className="dropdown-item border-0 transition-link" onClick={()=>dispatch(popularidad({productos: productos}))}>Popularidad</Link> */}
                          {/* <Link className="dropdown-item border-0 transition-link" onClick={()=>ordenarMenor()}>Precio:Menor a mayor</Link> */}
                          {/* <Link className="dropdown-item border-0 transition-link" onClick={()=>dispatch(mayor({productos: productos}))}>Precio: Mayor a menor</Link> */}
                        </div>
                      </li>
                        {/* <select className="selectpicker text-sm text-muted mb-0" data-customclass="form-control form-control-sm">
                          <option value>Ordenar por </option>
                          <option value="popularidad">Popularidad</option>
                          <option value="low-high">Precio: Menor a Mayor</option>
                          <option value="high-low">Precio: Mayor a menor </option>
                        </select> */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">

                  {/* <Productos productos = {productos}/> */}

                </div>

                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center justify-content-lg-end">
                    {/* <li className="page-item mx-1"><a className="page-link" href="#!" aria-label="Previous"><span aria-hidden="true">«</span></a></li> */}
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/1">1</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/2">2</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/3">3</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/4">4</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/5">5</Link></li>
                    <li className="page-item mx-1"><Link className="page-link"  to="/productos/6">6</Link></li>
                    {/* <li className="page-item ms-1"><a className="page-link" href="#!" aria-label="Next"><span aria-hidden="true">»</span></a></li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>

    </div>  
  </div>
  )
}
  
export default ProductosList