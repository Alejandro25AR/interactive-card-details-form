import React from 'react';

import '../scss/index.scss'; 
import loading from '../images/loading.svg'

export default function Loader(){
  return(
    <div className='c-loader'>
      <img className='c-loader__img' src={loading}/>
      <p className='c-loader__message'>Loading</p>
    </div>
  );
}