import React from 'react'
import {ProductForm} from '.'
import {useState} from 'react';
import {ProductValidators} from '../product/'


function initSetProductValFunction(product, setProduct) {
    return function(productAttr, productVal) {
        product = {...product, [productAttr]: productVal}
        setProduct(product)
    }
}

function submitForm(product, onFormSubmit, setFormState) {

    const isValid = Object.entries(product).reduce((previous, currentEntry) => {
        const [propName, propValue] = currentEntry;
        if (ProductValidators[propName] === undefined) {
            return !!previous;
        }
        return previous && ProductValidators[propName](propValue)
    });
    
    if (isValid) {
        onFormSubmit(product);
        setFormState({'code': 'success'});
    } else {
        setFormState({'code': 'error'});
    }
}
function DataProductForm({onFormSubmit, submitBtnLabel, product = {}}) {
    
    const [_product, setProduct] = useState(product);
    const [formState, setFormState] = useState({'code': null});

    const setProductVal = initSetProductValFunction(_product, setProduct);
        
    return <ProductForm setProductVal={setProductVal} onFormSubmit={() => submitForm(_product, onFormSubmit, setFormState)} submitBtnLabel={submitBtnLabel}
        product={_product} formState={formState} />;

}

export {DataProductForm}