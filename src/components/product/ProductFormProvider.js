import React, { useCallback, useContext, useState } from 'react';
import { PRODUCT_INPUTS_META } from 'components/product/ProductDefinition';
import ProductForm from 'components/product/ProductForm';
import { validatorUtils } from 'Utils';
import { ProductContext } from 'context/ProductContext';

const ProductFormProvider = function ({
  formHeading, submitBtnLabel, onFormSubmit, product, setProduct,
}) {
  const [formState, setFormState] = useState({ code: null, errors: {} });
  const submitForm = useCallback(() => {
    const errors = validatorUtils.validate(product, PRODUCT_INPUTS_META);
    if (errors === null) {
      setFormState({ code: 'success', errors: {} });
      onFormSubmit(product);
    } else {
      setFormState({ code: 'error', errors });
    }
  }, [setFormState, product]);

  const onInputChange = useCallback((propName, value) => {
    setProduct((prevPorduct) => ({ ...prevPorduct, ...{ [propName]: value } }));
  }, [setProduct]);

  return (
    <ProductForm
      formHeading={formHeading}
      onInputChange={onInputChange}
      onFormSubmit={submitForm}
      submitBtnLabel={submitBtnLabel}
      product={product}
      formState={formState}
    />
  );
};

export default ProductFormProvider;
