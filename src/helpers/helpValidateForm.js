export const validationsForm = (form, fieldsFocused) => {
  let errors = {};

  const regexName = /^([A-Za-zÑñÁáÉéÍíÓóÚúÜü\s])+$/;
  const regexNumbers = /^[0-9]+$/;
  
  /* nameOfOwner field validations  */
  const nameOfOwner = form.nameOfOwner.trim();
  if(fieldsFocused.nameOfOwner){
    if (!nameOfOwner) {
      errors.nameOfOwner = `This field is required`;
    }
    else if (!regexName.test(nameOfOwner)) {
      errors.nameOfOwner = `Wrong format, only letters and blank spaces`;
    }
    else if(nameOfOwner.length < 9){
      errors.nameOfOwner = `This field must have a minimum of 8 characters`;
    }
  }
  
  /* cardNumber field validations */
  const cardNumber = form.cardNumber.trim();
  if(fieldsFocused.cardNumber){
    if (!cardNumber) {
      errors.cardNumber = `This field is required`;
    } 
    else if (!regexNumbers.test(cardNumber)) {
      errors.cardNumber = `Wrong format, only numbers`;
    } 
    else if(cardNumber.length !== 16) {
      errors.cardNumber = `Wrong format, this field must contain 16 numbers`;
    }
  }

  /* monthOfIssue field validations */
  const monthOfIssue = form.monthOfIssue.trim();
  if(fieldsFocused.monthOfIssue){
    if (!monthOfIssue) {
      errors.monthOfIssue = `This field is required`;
    } 
    else if (!regexNumbers.test(monthOfIssue)) {
      errors.monthOfIssue = `Wrong format, only numbers`;
    } 
    else if(monthOfIssue.length < 2){
      errors.monthOfIssue = `This field must have 2 digits`;
    } 
    else if (+monthOfIssue > 12 || +monthOfIssue === 0) {
      errors.monthOfIssue = `This field must be between 1 and 12`;
    }
  }

  /* yearOfIssue field validations */
  const yearOfIssue = form.yearOfIssue.trim();
  if(fieldsFocused.yearOfIssue){
    if (!yearOfIssue) {
      errors.yearOfIssue = `This field is required`;
    }
    else if (!regexNumbers.test(yearOfIssue)) {
      errors.yearOfIssue = `Wrong format, only numbers`;
    } 
    else if(yearOfIssue.length < 2){
      errors.yearOfIssue = `This field must have 2 digits`;
    } 
  }

  /* cvc field validations */
  const cvc = form.cvc.trim() 
  if(fieldsFocused.cvc){
    if (!cvc) {
      errors.cvc = `This field is required`;
    }
    else if (!regexNumbers.test(cvc)) {
      errors.cvc = `Wrong format, only numbers`;
    } 
    else if(cvc.length < 3){
      errors.cvc = `This field must have 3 digits`;
    }
  }

  return errors;
};