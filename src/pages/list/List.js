import {ProductsList} from '../../components/productsList'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { Filter } from '../../components/filter';
import {useState } from 'react';
import PropTypes from 'prop-types'

const FILTER_DEFAULTS = {name: null, minStockCapacity:0, maxStockCapacity: Number.MAX_SAFE_INTEGER }
function initSetFilter(filterState, setFilterState) {
    return function(filterProp, filterValue) {
        if (!filterValue) {
            filterValue = FILTER_DEFAULTS[filterProp];
        }
        filterState = {...filterState, [filterProp]: filterValue}
        setFilterState(filterState);
    }
}

function filterList(listItems, filterState) {
    let filteredList = listItems.filter(function(item){
        const nameLower = item.name.toLowerCase();
        const filterNameLower = filterState.name ? filterState.name.toLowerCase() : null;
        if (
            item.stockCapacity >=filterState.minStockCapacity && item.stockCapacity <= filterState.maxStockCapacity &&
            (!filterNameLower || nameLower.indexOf(filterNameLower) !== -1)
        ) {            
            return true;            
        }
        return false;
    });
    return filteredList;

}
function List({listItems, deleteFunc}) {

    const [filterState, setFilterState] = useState(FILTER_DEFAULTS);
    const setFilter = initSetFilter(filterState, setFilterState);    
    const filteredList = filterList(listItems, filterState);
    return(
    <>
        <div className="flex-container">
            <div>
                <Filter setFilter={setFilter} />

                <Link to="/add">
                    <Button color="primary" size="small" variant="contained">
                        Add new product
                    </Button>
                </Link>
            </div>
            <ProductsList onAddToList={() => {}} list={filteredList} deleteFunc={deleteFunc} filterState={filterState}></ProductsList>
        </div>
        
    </>
    )
}

List.propTypes = {
    name: PropTypes.string,
    minStockCapacity: PropTypes.number,
    maxStockCapacity: PropTypes.number
    
}
export {List}