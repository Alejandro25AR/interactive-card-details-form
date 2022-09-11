import React from "react";
import { useForm } from '../../hooks/useForm';
import { validationsForm } from '../../helpers/helpValidateForm';

import MoneyCardForm from "./MoneyCardForm";
import MoneyCardThanks from "./MoneyCardThanks";
import MoneyCardView from "./MoneyCardDetails/MoneyCardDetails";

const initialForm = {
  nameOfOwner: "",
  cardNumber: "",
  monthOfIssue: "",
  yearOfIssue: "",
  cvc: "",
};

export default function MoneyCardApp() {
  const {
    errors,
    form,
    loading,
    isCardSaved,
    cardToMove,
    backgroundButton,
    validInputs,
    handleChange,
    handleNewCard,
    handleOnKeyDown,
    handleCardMovement,
    handleFocus,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <div className="c-content-container">
      {
        isCardSaved 
          ? (
            <MoneyCardThanks
              handleNewCard={handleNewCard}
              loading={loading}
            />
          ):(
            <MoneyCardForm
              errors={errors}
              form={form}
              loading={loading}
              backgroundButton={backgroundButton}
              validInputs={validInputs}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleCardMovement={handleCardMovement}
              handleOnKeyDown={handleOnKeyDown}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
            />
          )
      }    
      </div> 
      <MoneyCardView
        form={form}
        cardToMove={cardToMove}
        validInputs={validInputs}
      />
    </>
  );
}
