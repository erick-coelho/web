import { useState } from "react";
import ButtonLink from "../form/ButtonLink";
import ButtonSubmit from "../form/ButtonSubmit";
import Input from "../form/Input";
import TextArea from '../form/TextArea'

function ProductForm( {btnText, handleSubmit, productData}) {
    const [product, setProduct] = useState(productData || {})

    const submit = (e) => {
        e.preventDefault();
        console.log(product)
        handleSubmit(product);
    }

    function handleChange(e) {
        setProduct({...product, [e.target.name] : e.target.value})

    }

    return (
        <form onSubmit={submit}>
            <Input handleOnChange={handleChange} type="text" 
                   name='name' text="Name" placeholder="Product name" 
                   value={product.name ? product.name : ''}/>
            <Input handleOnChange={handleChange} type='number' 
                   name='price' text='Price' placeholder='Product price' 
                   value={product.price ? product.price : ''}/>
            <Input handleOnChange={handleChange} type='text' 
                   name='category' text='Category' placeholder='Product category' 
                   value={product.category ? product.category : ''}/>
            <TextArea handleOnChange={handleChange} name='description'
                      text='Description' placeholder='Product description' 
                      value={product.description ? product.description : ''}/>
            <Input handleOnChange={handleChange} type='text' 
                   name='imageUrl' text='Image' placeholder='Product image' 
                   value={product.imageUrl ? product.imageUrl : ''}/>
            <div className="row">
                <ButtonLink
                    divClass='d-grid gap-3 col-md-6 mx-auto'
                    linkTo='/products'
                    linkClass='btn btn-danger'
                    text='Back' />
                <ButtonSubmit
                    divClass='d-grid gap-3 col-md-6 mx-auto'
                    btnClass='btn btn-success'
                    text={btnText} />
            </div>
        </form>
    )
}
export default ProductForm;