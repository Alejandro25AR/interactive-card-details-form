import { useState, useEffect, useRef } from "react";

export function useMoneyCardDetails(form, validInputs) {
  const [details, setDetails] = useState({...form});
  const refLed = useRef();

  useEffect(() => {
    setDetails({...form});
  }, [form]);

  useEffect(() => {
    switchLed(onLed, offLed, validInputs);
  }, [validInputs]);

  const onLed = () => {
    refLed.current.classList.add("c-card-front__state--success");
  };
  const offLed = () => {
    refLed.current.classList.remove("c-card-front__state--success");
  };

  const switchLed = (onLed, offLed, validInputs) => {
    validInputs ? onLed() : offLed();
  }

  const getQuartetsOfCardNumber = (cardNumber) => {
    const cardNumberFill = cardNumber + "o".repeat(16 - cardNumber.length);
    const arrQuartets = [...cardNumberFill.match(/(\w{4})/g)];
    const strQuartets = arrQuartets.join(" ");
    return strQuartets;
  };

  return {
    details,
    refLed,
    getQuartetsOfCardNumber
  };
}
