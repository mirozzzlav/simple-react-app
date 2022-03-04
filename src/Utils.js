const validatorUtils = {
  isFieldRequired(fieldMeta) {
    return fieldMeta.validators.find((validator) => validator.name === 'isRequired');
  },
  validate(toValidateObject, meta) {
    const errors = {};
    for (const [propName, value] of Object.entries(toValidateObject)) {
      const { validators } = meta[propName];
      const errorMsg = validators
        .map(
          (validator) => (!validator.validate(value) ? validator.errorMsg(propName) : null),
        )
        .find((validatorErrMsg) => validatorErrMsg !== null);
      if (errorMsg) {
        errors[propName] = errorMsg;
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
  },
};

const generateID = () => Date.now();

export { validatorUtils, generateID };
