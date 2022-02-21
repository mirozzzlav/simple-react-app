import './Product.css'
import React, {useCallback} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';
import {FavouritesContext, ProductCategoryContext} from '../../context'

function productContent(product, displayValues = {}) {
    let ret = [];
    for (const [productProp, productPropVal] of Object.entries(product)) {
        if (productProp === 'name') {
            continue;
        }
        const displayValue = displayValues[productPropVal] !== undefined ? displayValues[productPropVal] : productPropVal;
        ret = [...ret, <div key={productProp}><span>{productProp}</span>{displayValue}</div>]
    }

    return ret;
}

 
function Product({product, deleteFunc}) {
    const {isFavourite, addToFavourites, deleteFromFavourites} = React.useContext(FavouritesContext);
    const categories = React.useContext(ProductCategoryContext);

    const onFavouriteClicked = useCallback((productId) => {
        productId = parseInt(productId);
        if (isFavourite(productId)) {
            deleteFromFavourites(productId);
        } else {
            addToFavourites(productId);
        }
    }, [isFavourite, addToFavourites, deleteFromFavourites]);

    return (
        <div className="product shadow-box">
            <h2>{product.name}</h2>
            <div className="info">{productContent(product, categories)}</div>
            <div className="actions">
                <Link to={`/edit/${product.id}`}>
                    <EditIcon fontSize="small" />
                </Link>
                <button className="icon-btn" onClick={() => {deleteFunc(product.id);}}>
                    <DeleteIcon fontSize="small"/>
                </button>
                <button className={`icon-btn favourite${isFavourite(product.id) ? ' active' : ''}`} 
                    onClick={() => onFavouriteClicked(product.id)}>
                    <FavoriteIcon fontSize="small" />
                </button>
            </div>
        </div>
    );
}

export {Product};
