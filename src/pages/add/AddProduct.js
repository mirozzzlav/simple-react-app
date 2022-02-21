import {DataProductForm} from '../../components/productForm'
function AddProduct({onFormSubmit, getProduct}) {
    const product = getProduct();
    return <DataProductForm onFormSubmit={onFormSubmit} submitBtnLabel="Add Product" product={product} />
}

export {AddProduct}