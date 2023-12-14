import { Link } from "react-router-dom";

const Item = ({ id, name, price, stock, image }) => {

    return (
        <div className="col s3">
            <div className="card light-blue lighten-2">
                <div className="card-content white-text">
                    <span className="card-title">{name}</span>
                    <p>
                        <img className="responsive-img" src={image} />
                        <a>Precio: $ {price}</a>
                    </p>
                </div>
                <div className="card-action blue lighten-5">
                    <Link to={`/item/${id}`}> Ver detalle </Link>
                </div>
            </div>
        </div>
    )
}

export default Item;