function ProductDisplay({ product }) {
    return (
        <div>
            <div className="row" >
                <div className="col-md-6">
                    <img src={product.imageUrl} alt='imagem do produto' width="300" height="400"/>
                </div>
                <div className="col-md-6">
                    <div className="row" >
                        <div className="col-md-auto">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-auto">
                            <p>Preço: {product.price}</p>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-auto">
                            <p>{product.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDisplay;