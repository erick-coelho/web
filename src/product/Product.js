import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import ProductForm from './ProductForm'
import ProductDisplay from './ProductDisplay';
import ButtonSubmit from '../form/ButtonSubmit';


function UpdateProduct() {
    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const [productState, setProductState] = useState(false);

    function putProduct(product) {
        fetch(`http://localhost:5058/api/v1/Product/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/Json'
            },
            body: JSON.stringify(product)
        }).then((resp) => resp.json())
            .then(data => {
                setProduct(data);
                setProductState(false);
            }
            )
            .catch(err => console.log(err))
    }

    function changeState() {
        setProductState(!productState);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5058/api/v1/Product/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'Application/Json'
                }

            }).then(resp => resp.json())
                .then((data) => {
                    setProduct(data)
                }

                ).catch(err => console.log(err))
        }, 300)
    }, [id]);


    return (
        <>
            {product.name ? (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <h1>{product.name}</h1>
                        </div>
                        {!productState ? (
                            <ButtonSubmit
                                divClass='d-grid gap-3 col-md-3 mx-auto'
                                btnClass='btn btn-success btn-sm'
                                eventHandle={changeState}
                                text='Editar' />
                        ) : (
                            <ButtonSubmit
                                divClass='d-grid gap-3 col-md-3 mx-auto'
                                btnClass='btn btn-danger btn-sm'
                                eventHandle={changeState}
                                text='Voltar' />
                        )}
                        {!productState ? (
                            <ProductDisplay product={product} />
                        ) : (
                            <ProductForm productData={product} handleSubmit={putProduct} btnText={'Editar'} />
                        )}
                    </div>
                </div>

            ) : (<Loading />)}
        </>
    )
}
export default UpdateProduct;