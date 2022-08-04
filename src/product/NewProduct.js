import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom"

function NewProduct() {
    const navigate = useNavigate();

    function postProduct(product) {
        fetch("http://localhost:5058/api/v1/Product", {
            method: 'POST',
            headers: {
                'Content-type': 'Application/Json'
            },
            body: JSON.stringify(product)
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                navigate('/products')
            } 
            )
            .catch(err => console.log(err))
    }

    return (
        <div className="container-fluid">
            <h1 className="h1 text-center">Create new product</h1>
            <ProductForm handleSubmit={postProduct} btnText='new product' />
        </div>
    )
}
export default NewProduct;