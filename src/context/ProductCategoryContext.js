import React from "react";
const DEFAULT_CATEGORY = 'toy';
const DEFAULT_CATEGORIES = {
    'vehicle': 'Vehicle',
    'toy': 'Toy',
    'technology': 'Technology'
}

const ProductCategoryContext = React.createContext();
export {ProductCategoryContext, DEFAULT_CATEGORIES, DEFAULT_CATEGORY};