import React from 'react';

import '../../scss/index.scss'; 
import complete from '../../images/complete.svg';

import Loader from "../Loader";

export default function MoneyCardThanks({handleNewCard,loading}){
  return(
    <>
      {loading && <Loader/>}
      {!loading &&
        <div className='c-thanks'>
          <img src={complete}/>
          <h2 className='c-thanks__title'>THANK YOU</h2>
          <p className='c-thanks__message'>We´ve added your card details</p>
          <button className="o-button o-button--gradient" onClick={()=> handleNewCard()}>Continue</button>
        </div>}
    </>
  );
}