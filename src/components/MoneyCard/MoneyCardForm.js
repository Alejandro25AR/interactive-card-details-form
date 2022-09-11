import React, { useRef } from "react";
import "../../scss/index.scss";

export default function MoneyCardForm({
  errors,
  form,
  backgroundButton,
  validInputs,
  handleChange,
  handleOnKeyDown,
  handleFocus,
  handleBlur,
  handleSubmit
}) {
  const refMonthOfIssue = useRef();
  
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="c-form__field">
        <label className="c-form__label" htmlFor="nameOfOwner">
          CARDHOLDER NAME
        </label>
        <div className='c-form__container-input'>
          <input
            className="c-form__input"
            type="text"
            maxLength="32"
            name="nameOfOwner"
            value={form.nameOfOwner}
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => handleChange(e)}
            onFocus={(e)=> handleFocus(e)}
            onBlur={(e)=> handleBlur(e)}
            id="nameOfOwner"
            required
          />
        </div>
        <span className="c-form__advice">{errors.nameOfOwner}</span>
      </div>
      <div className="c-form__field">
        <label className="c-form__label" htmlFor="cardNumber">CARD NUMBER</label>
        <div className='c-form__container-input'>
          <input
            className="c-form__input"
            type="text"
            maxLength="16"
            autoComplete="false"
            name="cardNumber"
            value={form.cardNumber}
            placeholder="e.g. 1234 5678 9012 0000"
            onChange={(e) => handleChange(e)}
            onKeyDown={(e)=> handleOnKeyDown(e)}
            onFocus={(e)=> handleFocus(e)}
            onBlur={(e)=> handleBlur(e)}
            id="cardNumber"
            required
          />
        </div>
        <span className="c-form__advice">{errors.cardNumber}</span>
      </div>
      <div className="c-form__box-date-cvc">
        <div className="c-form__field c-form__box-date">
          <p className="c-form__label">
            EXP. DATE (<label htmlFor="monthOfIssue">MM</label>/
            <label htmlFor="yearOfIssue">YY</label>)
          </p>
          <div className="c-form__box-inputs-date">
            <div className='c-form__container-input'>
              <input
                className="c-form__input"
                type="text"
                maxLength="2"
                name="monthOfIssue"
                value={form.monthOfIssue}
                placeholder="MM"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e)=> handleOnKeyDown(e)}
                onFocus={(e)=> handleFocus(e)}
                onBlur={(e)=> handleBlur(e)}
                id="monthOfIssue"
                ref={refMonthOfIssue}
                required
              />
            </div>
            <div className='c-form__container-input'>
              <input
                className="c-form__input"
                type="text"
                maxLength="2"
                name="yearOfIssue"
                value={form.yearOfIssue}
                placeholder="YY"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e)=> handleOnKeyDown(e)}
                onFocus={(e)=> handleFocus(e)}
                onBlur={(e)=> handleBlur(e)}
                id="yearOfIssue"
                required
              />
            </div>
          </div>
          <span className="c-form__advice">{errors.monthOfIssue || errors.yearOfIssue}</span>
        </div>
        <div className="c-form__field c-form__box-cvc">
          <label className="c-form__label" htmlFor="cvc">CVC</label>
          <div className='c-form__container-input'>
            <input
              className="c-form__input"
              type="text"
              maxLength="3"
              name="cvc"
              value={form.cvc}
              placeholder="e.g. 123"
              onChange={(e) => handleChange(e)}
              onKeyDown={(e)=> handleOnKeyDown(e)}
              onFocus={(e)=> handleFocus(e)}
              onBlur={(e)=> handleBlur(e)}
              id="cvc"
              required
            />
          </div>
          <span className="c-form__advice">{errors.cvc}</span>
        </div>
      </div>
      <button className="o-button" disabled={!validInputs}>
        <span className="o-button__text">confirm</span>
        <div className="o-button__filled" style={{"transform":`translateX(-${(backgroundButton===undefined ? 0 :backgroundButton)}%)`}}></div>
      </button>
    </form>
  );
}
