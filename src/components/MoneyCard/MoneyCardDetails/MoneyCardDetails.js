import React from 'react';

import { useMoneyCardDetails } from './useMoneyCardDetails';
import '../../../scss/index.scss';

export default function MoneyCardView({form, cardToMove,validInputs}){
  const {
    details,
    refLed,
    getQuartetsOfCardNumber
  } = useMoneyCardDetails(form, validInputs);

  return (
    <div>
      <div className='c-box-cards'>
        <div className={`c-card-front ${cardToMove === 'front' ? 'translate-right' : ''}`}>
          <div ref={refLed} className='c-card-front__state'></div>
          <p className='c-card-front__number'>
            {getQuartetsOfCardNumber(details.cardNumber || '') || 'oooo oooo oooo oooo'}
          </p>
          <div className='c-card-front__name-date'>
            <p className='c-card-front__name'>{details.nameOfOwner || 'JANE APPLESEED'}</p>
            <div>
              <p>{details.monthOfIssue || '00'}/{details.yearOfIssue || '00'}</p>
            </div>
          </div>
        </div>
        <div className={`c-card-back ${cardToMove === 'back' ? 'translate-right' : ''}`}>
          <p className='c-card-back__cvc'>{details.cvc || '000'}</p>
        </div>
      </div>
    </div>
  );
}