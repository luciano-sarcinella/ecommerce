import { Link } from 'react-router-dom';

const  Categorias  = ()  => {
    return(
        <div className="container px-lg-3">
            <section className="pt-5">
            <header className="text-center">
                <p className="small text-muted small text-uppercase mb-1">creado  para vos</p>
                <h2 className="h5 text-uppercase mb-4">Explora nuestras categorias</h2>
            </header>
            <div className="row">
                <div className="col-md-4"><Link className="category-item" to="productos/indumentaria"><img className="img-fluid" src="https://i.ibb.co/RPqyJ7w/cat11.png" alt=""/><strong className="category-item-title">Indumentaria</strong></Link>
                </div>
                <div className="col-md-4"><Link className="category-item mb-4" to="productos/zapatillas"><img className="img-fluid" src="https://i.ibb.co/mHFYf7k/cat222222.png" alt=""/><strong className="category-item-title">Zapatillas</strong></Link><Link className="category-item"  to="productos/relojes"><img className="img-fluid" src="https://i.ibb.co/PxNVRyC/cat333.png" alt=""/><strong className="category-item-title">Relojes</strong></Link>
                </div>
                <div className="col-md-4"><Link className="category-item" to="productos/electronica"><img className="img-fluid" src="https://i.ibb.co/CsTrrdW/cat4444.png" alt=""/><strong className="category-item-title">Electronica</strong></Link>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Categorias