import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    return (
    <article className="ItemDetail">
      <picture>
        <img src={img} alt={name}  className="ItemImage"/>
      </picture>

      <section className="ItemInfo">
        <h2>{name}</h2>
        <p>Categoría: {category}</p>
        <p>Precio: ${price}</p>
        <p>Stock disponible: {stock}</p>
        <p>Descripción: {description}</p>
        <button>Comprar</button>
      </section>

      <footer className="ItemFooter">
        <ItemCount initial={1} stock={stock}></ItemCount>
      </footer>

    </article>
    )
}
export default ItemDetail