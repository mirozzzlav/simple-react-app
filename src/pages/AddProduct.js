import React, { useCallback, useContext, useState } from 'react';
import { ProductContext } from 'context/ProductContext';
import ProductFormProvider from 'components/product/ProductFormProvider';

const AddProductPage = function () {
  const { getEmptyProduct, addProductToList } = useContext(ProductContext);
  const [product, setProduct] = useState(getEmptyProduct());
  const onFormSubmit = useCallback(() => {
    addProductToList(product);
    setProduct(getEmptyProduct());
  }, [product, setProduct]);

  return (
    <ProductFormProvider
      formHeading="Add product"
      submitBtnLabel="Add Product"
      product={product}
      onFormSubmit={onFormSubmit}
      setProduct={setProduct}
    />
  );
};

export default AddProductPage;
