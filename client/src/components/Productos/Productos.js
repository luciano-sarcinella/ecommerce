import { ProductoCard } from "./ProductoCard"

export const Productos = ({productos}) => {
    return (
        <div className="d-flex justify-content-center row">
            {productos.map(producto => <ProductoCard
             key = {producto.id} 
             titulo = {producto.titulo}
             descripcion = {producto.descripcion}
             precio = {producto.precio}
             categoria = {producto.categoria}
             url = {producto.url}
             new = {producto.new}
             sale = {producto.sale}
             sold = {producto.sold}
             />)}
        </div>
    )
}