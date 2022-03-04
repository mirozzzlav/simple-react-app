import React, { useContext, useMemo } from 'react';
import { ProductContext } from 'context/ProductContext';
import { Product } from 'components/product/Product';
import { FilterContext } from 'context/FilterContext';
import { Wrap, WrapItem } from '@chakra-ui/react';

const ProductsList = function () {
  const { products } = useContext(ProductContext);
  const { filter } = useContext(FilterContext);

  const filteredProducts = useMemo(() => products.filter((item) => {
    const nameLower = item.name.toLowerCase();
    const filterNameLower = filter.name ? filter.name.toLowerCase() : null;
    if (
      item.stockCapacity >= filter.minStockCapacity
          && item.stockCapacity <= filter.maxStockCapacity
          && (!filterNameLower || nameLower.indexOf(filterNameLower) !== -1)
    ) {
      return true;
    }
    return false;
  }), [products, filter]);

  return (
    <Wrap className="products-list">
      {filteredProducts.map((productObj) => (
        <WrapItem key={productObj.id}><Product product={productObj} /></WrapItem>))}
    </Wrap>
  );
};

export default ProductsList;
