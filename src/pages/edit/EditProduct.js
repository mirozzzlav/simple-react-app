import {DataProductForm} from '../../components/productForm'
import {useParams} from "react-router-dom";
function EditProduct({onFormSubmit, getProduct}) {
    const {productId} = useParams();
    
    const product = getProduct(productId);
    return <DataProductForm onFormSubmit={onFormSubmit} submitBtnLabel="Save" product={product} />
}

export {EditProduct}