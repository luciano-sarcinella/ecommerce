import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from 'react-redux'



export const ProductoCard = ({ titulo, precio, url,  sale, sold}) => {
  const {large} = useSelector(state => state.grid.value)

  if(!large){
    return(
      <div className="col-lg-4 col-sm-6">
        <div className="product text-center">
          <div className="position-relative mb-3">
            {/* <div className="badge text-white bg-primary rounded-0">Sale</div> */}
            <a className="d-block" href="detail.html"><img className="img-fluid w-100" src={url} alt="..."/></a>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
                <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
                <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
              </ul>
            </div>
          </div>
          <h6> <a className="reset-anchor" href="detail.html">{titulo}</a></h6>
          <p className="small text-muted">$ {precio}</p>
        </div>
      </div>
    )
  }
  return(
    <div className="col-lg-3 col-sm-6">
      <div className="product text-center">
        <div className="position-relative mb-3">
          <a className="d-block" href="detail.html"><img className="img-fluid w-100" src={url} alt="..."/></a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
              <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
              <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
            </ul>
          </div>
        </div>
        <h6> <a className="reset-anchor" href="detail.html">{titulo}</a></h6>
        <p className="small text-muted">$ {precio}</p>
      </div>
    </div>
  )

   
}


// {/* <div class="col-lg-3 ||4 col-sm-6">
// <div class="product text-center">
//   <div class="position-relative mb-3">
//     {/* <div class="badge text-white bg-primary rounded-0">Sale</div> */}
//     <a class="d-block" href="detail.html"><img class="img-fluid w-100" src={url} alt="..."/></a>
//     <div class="product-overlay">
//       <ul class="mb-0 list-inline">
//         <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark rounded-0" href="#!"><FontAwesomeIcon icon={faHeart}/></a></li>
//         <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark rounded-0" href="cart.html">Comprar</a></li>
//         <li class="list-inline-item me-0"><a class="btn btn-sm btn-outline-dark rounded-0" href="#productView" data-bs-toggle="modal"><FontAwesomeIcon icon={faExpand}/></a></li>
//       </ul>
//     </div>
//   </div>
//   <h6> <a class="reset-anchor" href="detail.html">{titulo}</a></h6>
//   <p class="small text-muted">$ {precio}</p>
// </div>
// </div> */}