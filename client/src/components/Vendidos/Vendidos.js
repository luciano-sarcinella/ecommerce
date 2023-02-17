import Producto1 from '../../img/product-1.jpg'
import Producto2 from '../../img/product-2.jpg'
import Producto3 from '../../img/product-3.jpg'
import Producto4 from '../../img/product-4.jpg'
import Producto5 from '../../img/product-5.jpg'
import Producto6 from '../../img/product-6.jpg'
import Producto7 from '../../img/product-7.jpg'
import Producto8 from '../../img/product-8.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'



const Vendidos = () => {
    return (
        <div className="container px-lg-3">
        <section className="py-5">
          <header>
            <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
            <h2 className="h5 text-uppercase mb-4">Productos mas vendidos</h2>
          </header>
          <div className="row">
            {/* PRODUCTO */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={Producto1} alt="..."/></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
                <p className="small text-muted">$250</p>
              </div>
            </div>
            {/* PRODUCTO */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-primary rounded-0">Sale</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={Producto2} alt="..."/></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
                <p className="small text-muted">$300</p>
              </div>
            </div>
            {/* PRODUCTO */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={Producto3} alt="..."/></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
                <p className="small text-muted">$25</p>
              </div>
            </div>
            {/* PRODUCTO */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-info rounded-0">New</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={Producto4} alt="..."/></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
                <p className="small text-muted">$351</p>
              </div>
            </div>
            {/* PRODUCTO */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-danger rounded-0">Sold</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={Producto5} alt="..."/></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Red digital smartwatch</a></h6>
                <p className="small text-muted">$250</p>
              </div>
            </div>
            {/* PRODUCTO */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={Producto6} alt="..."/></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Nike air max 95</a></h6>
                <p className="small text-muted">$300</p>
              </div>
            </div>
            {/* PRODUCTO */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={Producto7} alt="..."/></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Joemalone Women prefume</a></h6>
                <p className="small text-muted">$25</p>
              </div>
            </div>
            {/* PRODUCTO */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={Producto8} alt="..."/></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Apple Watch</a></h6>
                <p className="small text-muted">$351</p>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Vendidos