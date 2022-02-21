import PropTypes from 'prop-types'
import {DEFAULT_CATEGORY} from '../../context'

const ProductPropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    stockCapacity: PropTypes.number.isRequired,
    category: PropTypes.string
}

const ProductInputTypes = {
    category: 'select'
}
const ProductDefaults = {
    id: undefined,
    name: '',
    description: '',
    price: 0,
    stockCapacity: 0,
    category: DEFAULT_CATEGORY
}

const ProductValidators = {
    id: (val) => !!val,
    name: (val) => !!val,
    price: (val) => (val || val === 0) && !isNaN(val),
    stockCapacity: (val) => (val || val === 0) && !isNaN(val)
}
export {ProductPropTypes, ProductDefaults, ProductValidators, ProductInputTypes}