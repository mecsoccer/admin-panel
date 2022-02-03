export const validate = (valueValidationObj, cb) => {
  const valid = Object.values(valueValidationObj).every((value) => (
    value.value !== '' && value.validation === true
  ));
  
  cb(valid);
};

export const handleFormInput = (name, value, regex, valueValidationObj, cb) => {
  const formTemp = {...valueValidationObj};

  formTemp[name] = { value, validation: regex.test(value) ? true : false };

  cb(formTemp);
};
