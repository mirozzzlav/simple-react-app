import './ProductsList.css'
import React from 'react'
import PropTypes from 'prop-types';
import {Product} from '../product'


function ProductsList({list, deleteFunc}) {
    return (
        <div className="products-list">
            {list.map((obj, k)=> (<Product key={k} product={obj} deleteFunc={deleteFunc}></Product>) )}
        </div>
    );
}

ProductsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.instanceOf(Object)
    )
}

export {ProductsList};
