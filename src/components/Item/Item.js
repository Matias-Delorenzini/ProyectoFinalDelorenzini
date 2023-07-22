import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({id, name, price, stock, img}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    <Link to={`/item/${id}`}>{name}</Link>
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Unidades disponibles: {stock}
                </p>
            </section>
        </article>
    )
}

export default Item