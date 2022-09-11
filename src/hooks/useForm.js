import {useState,useEffect} from 'react';

let fieldsFocused = {};

let numberSuccessField = 0;

export function useForm(initialForm, validateForm){
  const [form,setForm] = useState(initialForm);
  const [errors,setErrors] = useState({});
  const [loading,setLoading] = useState(false);
  const [backgroundButton,setBackgroundButton] = useState(0);
  const [cardToMove,setCardToMove] = useState('');
  const [validInputs,setValidInputs] = useState(false);
  const [isCardSaved,setIsCardSaved] = useState(false);

  useEffect(()=>{
    setNumbersOfSuccessfulFields();
    const buttonFillPercentage = 100 - (numberSuccessField * 20);
    setBackgroundButton(buttonFillPercentage);
    const areValidInputs = numberSuccessField === 5 ? true : false;
    setValidInputs(areValidInputs);
  },[errors]);

  useEffect(()=>{
    setErrors(validateForm(form,fieldsFocused)); 
  },[form]);

  const setNumbersOfSuccessfulFields = () => {
    const keyFieldsFocused = Object.keys(fieldsFocused);
    const arrSuccessFields = keyFieldsFocused.filter(key => errors[`${key}`] ? false : key);
    numberSuccessField = arrSuccessFields.length;
  }

  const handleFieldStyles = {
    FOCUS_AND_SUCCESS: 'c-form__container-input--focus-and-success',
    ERROR: 'c-form__container-input--error',
    focus(containerInput,nameInput) {
      fieldsFocused[nameInput] = true;

      if(!containerInput.classList.contains(this.FOCUS_AND_SUCCESS)){
        containerInput.classList.add(this.FOCUS_AND_SUCCESS);
      }
      if(containerInput.classList.contains(this.errors)) {
        containerInput.classList.remove(this.ERROR);
      }
    },
    blur(containerInput,nameInput) {
      const existError = errors[nameInput];
      
      if(existError){
        containerInput.classList.add(this.ERROR);
        containerInput.classList.remove(this.FOCUS_AND_SUCCESS);
      }
    }
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({
      ...form,
      [name]:value
    });
  };

  const handleCardMovement = (e) => {
    if(e.target.name === 'cvc'){
      setCardToMove('back');
    }else {
      setCardToMove('front');
    }
  }

  const handleFocus = (e) => {
    handleChange(e);
    handleCardMovement(e);
    const containerInput = e.target.parentElement;
    const nameInput = e.target.name;
    handleFieldStyles['focus'](containerInput,nameInput);
  }

  const handleBlur = (e) => {
    const containerInput = e.target.parentElement;
    const nameInput = e.target.name;
    handleFieldStyles['blur'](containerInput,nameInput);
    setCardToMove('');
  }

  const handleOnKeyDown = (e) => {
    const regexAcceptedCharacters = /[0-9]|(Arrow)|(Backspace)|(Tab)|(Delete)/g;
    const keyPressed = e.key;
    if(!regexAcceptedCharacters.test(keyPressed)){
      e.preventDefault();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCardSaved(true);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  };

  const handleNewCard = () => {
    fieldsFocused = {}
    setForm(initialForm);
    setIsCardSaved(false);
  }

  return {
    errors,
    form,
    loading,
    isCardSaved,
    cardToMove,
    backgroundButton,
    validInputs,
    handleChange,
    handleSubmit,
    handleNewCard,
    handleCardMovement,
    handleOnKeyDown,
    handleFocus,
    handleBlur
  };
}