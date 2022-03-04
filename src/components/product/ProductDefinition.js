import PropTypes from 'prop-types';

const DEFAULT_CATEGORY = 'toy';
const CATEGORIES = {
  vehicle: 'Vehicle',
  toy: 'Toy',
  technology: 'Technology',
};
const PRODUCT_PROP_TYPES = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  stockCapacity: PropTypes.number.isRequired,
  category: PropTypes.string,
};

const validators = {
  isRequired: {
    name: 'isRequired',
    validate: (val) => !!(val || parseInt(val, 10) === 0),
    errorMsg: (propName) => `${propName} is required field`,
  },
  isNumeric: {
    name: 'isNumeric',
    validate: (val) => !isNaN(val),
    errorMsg: (propName) => `${propName} has to be a number`,
  },
};

const PRODUCT_INPUTS_META = {
  category: { type: 'select', options: CATEGORIES, validators: [] },
  id: { type: 'input_text', validators: [validators.isRequired], readonly: true },
  name: { type: 'input_text', validators: [validators.isRequired] },
  description: { type: 'input_text', validators: [] },
  price: { type: 'input_numeric', validators: [validators.isRequired, validators.isNumeric] },
  stockCapacity: { type: 'input_numeric', validators: [validators.isRequired, validators.isNumeric] },
};

const DEFAULT_PRODUCT = {
  id: undefined,
  name: '',
  description: '',
  price: 0,
  stockCapacity: 0,
  category: DEFAULT_CATEGORY,
};

export {
  PRODUCT_PROP_TYPES, DEFAULT_PRODUCT, PRODUCT_INPUTS_META,
  DEFAULT_CATEGORY, CATEGORIES,
};
