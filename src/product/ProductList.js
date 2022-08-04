import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ButtonLink from '../form/ButtonLink';


function ProductList() {
    var [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5058/api/v1/Product", {
                method: "GET",
                headers: {
                    'Content-type': 'Application/Json'
                }
            }).then((resp) => resp.json())
                .then(data => {
                    setProducts(data);
                }).catch(err => console.log(err))
        }, 300)
    }, [])

    function deleteProduct(id) {
        fetch(`http://localhost:5058/api/v1/Product/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'Application/Json',
            },
        }).then((resp) => resp.json())
            .then(data => {
                setProducts(products.filter( (product) => product.id !== id))
            }).catch(err => console.log(err))
    }

    return (
        <div className="container-fluid ">
            <div className="row">
                <div className='col-md-8'>
                    <h2 className='text-right'>Product List</h2>
                </div>
                <ButtonLink
                    divClass='d-grid  col-md-3 mx-auto'
                    linkClass='btn btn-outline-primary'
                    linkTo='/products/create'
                    text='+ Product' />
            </div>
            <div className='row'>

                {products.map((product) => (

                    <ProductCard id={product.id}
                        name={product.name}
                        description={product.description}
                        category={product.category}
                        price={product.price}
                        image={product.imageUrl}
                        key={product.id}
                        handleDelete={deleteProduct} />
                )
                )}
            </div>
        </div>
    );
}
export default ProductList;