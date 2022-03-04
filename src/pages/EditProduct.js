import React, { useCallback, useContext, useState } from 'react';
import { ProductContext } from 'context/ProductContext';
import ProductFormProvider from 'components/product/ProductFormProvider';
import { useParams } from 'react-router-dom';

const EditProductPage = function () {
  const { productId } = useParams();
  const { getProduct, updateProduct } = useContext(ProductContext);
  const [product, setProduct] = useState(getProduct(productId));

  const onFormSubmit = useCallback(() => {
    updateProduct(product);
  }, [product, setProduct]);

  return (
    <ProductFormProvider
      formHeading="Edit product"
      submitBtnLabel="Edit Product"
      product={product}
      setProduct={setProduct}
      onFormSubmit={onFormSubmit}
    />
  );
};

export default EditProductPage;
