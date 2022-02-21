import './ProductForm.css'
import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {Link} from "react-router-dom";
import {ProductInputTypes} from '../../components/product'
import {ProductCategoryContext} from '../../context'

function getContent(setProductVal, product, additionalData = {}) {
    let ret = [];    
    
    for (const [propName, val] of Object.entries(product)) {        
        let disabled = false;
        if (propName === 'id') {
            disabled = true;
        }
        let input = <input type="text" onChange={(e) => {setProductVal(propName, e.target.value)}} 
            value={val} disabled={disabled} />;

        if (ProductInputTypes[propName] !==undefined) {
            if (ProductInputTypes[propName] === 'select' && additionalData[propName] !== undefined) {
                const options = Object.entries(additionalData[propName]).map(([k,v]) => {
                    return <option key={k} value={k}>{v}</option>
                });
                input = <select onChange={(e) => {setProductVal(propName, e.target.value)}} value={val} disabled={disabled}>
                            {options}
                        </select>
            }
        }

        ret = [...ret,
            <label key={propName}>
                {propName}
                {input}
            </label>
        ]
    }
    return ret;
}
function msg(formState) {
    let msg = '';
    if (formState?.code === 'success') {
        msg = 'Product is succesfully saved';
    }
    if (formState?.code === 'error') {
        msg = "Validation error, pls check your inputs."   
    }
    return <div className="msg success">{msg}</div>
    

}
function ProductForm({setProductVal, submitBtnLabel, onFormSubmit, formState, product=null}) {

    let categories= React.useContext(ProductCategoryContext);

    return (
    <div className="product-form-wrapper">
        <form>
            {getContent(setProductVal, product, {'category': categories})}
            {msg(formState)}
            <div className="actions">
                <Button color="primary" size="small" variant="contained" 
                    onClick={onFormSubmit}><SaveIcon />{submitBtnLabel}</Button>
                <Link to="/">       
                    <Button variant="outlined" size="small">Back</Button>
                </Link>
            </div>
        </form>
    </div>);
}

export {ProductForm};
