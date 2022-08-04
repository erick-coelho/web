import { Link } from 'react-router-dom'
import ButtonSubmit from '../form/ButtonSubmit';

function ProductCard({ id, name, price, description, category, handleDelete }) {

    const remover = (e) => {
        e.preventDefault();
        handleDelete(id);  
        window.location.reload(false);
    }

    return (
        <div className="col-sm-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><Link className='text-decoration-none text-reset' to={`/products/${id}`}>{name}</Link></h5>
                    <p className="card-text"><span>Price:</span> {price}</p>
                    <p className="card-text"><span>Category:</span> {category}</p>
                    <ButtonSubmit divClass={'d-grid  col-md-auto mx-auto'} btnClass={'btn btn-secondary'}  text={'delete'} eventHandle={remover}/>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;