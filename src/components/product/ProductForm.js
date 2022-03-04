import React from 'react';

import {
  Button,
  ButtonGroup,
  FormControl as FormControlChakra,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input, Select, Box,
} from '@chakra-ui/react';
import { PRODUCT_INPUTS_META } from 'components/product/ProductDefinition';
import { validatorUtils } from 'Utils';

import { Link } from 'react-router-dom';

const FormControl = function (props) {
  const { label, children, ...rest } = props;
  return (
    <FormControlChakra marginBottom={2} {...rest}>
      <FormLabel margin={0}>{label}</FormLabel>
      {children}
    </FormControlChakra>
  );
};

function ProductFormContent({ onInputChange, product, formState }) {
  let contentElements = [];
  for (const [propName, val] of Object.entries(product)) {
    const meta = PRODUCT_INPUTS_META[propName];
    const input = null;

    if (meta.type === 'input_text' || meta.type === 'input_numeric') {
      input = (
        <Input
          type={meta.type === 'input_numeric' ? 'number' : 'text'}
          onChange={(e) => {
            onInputChange(propName, e.target.value);
          }}
          value={val}
        />
      );
    }

    if (meta.type === 'select' && meta?.options) {
      const options = Object.entries(meta.options).map(
        ([k, v]) => <option key={k} value={k}>{v}</option>,
      );
      input = (
        <Select
          onChange={(e) => { updateProduct(propName, e.target.value); }}
          value={val}
        >
          {options}
        </Select>
      );
    }
    if (input) {
      contentElements = [...contentElements,
        <FormControl
          key={propName}
          label={propName}
          isReadOnly={!!meta.readonly}
          isDisabled={!!meta.readonly}
          isRequired={validatorUtils.isFieldRequired(meta)}
          isInvalid={!!formState?.errors[propName]}
        >
          {input}
          <FormErrorMessage>{formState.errors[propName]}</FormErrorMessage>
        </FormControl>];
    }
  }
  return contentElements;
}

const Msg = function ({ formState }) {
  let msg = null;
  let color = 'currentColor';

  if (formState.code === 'success') {
    msg = 'Product is successfully saved';
    color = 'green.500';
  }
  if (formState?.code === 'error') {
    msg = 'Form has validation errors, pls check your inputs.';
    color = 'red.500';
  }
  if (msg === null) {
    return null;
  }
  return (
    <Box
      color={color}
      marginTop={2}
      marginBottom={2}
      className={`msg ${formState.code === 'error' ? 'error' : 'success'}`}
    >
      {msg}
    </Box>
  );
};

const ProductForm = function ({
  formHeading, product, onInputChange, onFormSubmit, formState, submitBtnLabel,
}) {
  return (
    <div className="product-form-wrapper">
      <Heading as="h1" size="lg" mb={3}>{formHeading}</Heading>
      <form>
        <ProductFormContent {...{ onInputChange, product, formState }} />
        <Msg formState={formState} />
        <ButtonGroup variant="outline" marginTop={5}>
          <Button colorScheme="blue" onClick={onFormSubmit}>{submitBtnLabel}</Button>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default ProductForm;
