import React, { useState } from 'react';


require('./styles.css')

const Service = ({ title, price, time, description }) => {



  return (
    <div className="service">
      <div className='serviceContainerDetail'>
        <h3 className='serviceTitle'>{title}</h3>
        <p className='serviceDescription'>{description}</p>
      </div>
      <div className='containerServicePrice'>
        <div>
          <span className='priceService'>{price}</span>
          <span className='timeService'>{time}</span>
        </div>
        <button className='bookService'>Agendar</button>
      </div>
    </div>
  );
}

export default Service;

