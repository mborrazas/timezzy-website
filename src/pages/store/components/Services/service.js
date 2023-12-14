import React, { useState } from 'react';


require('./styles.css')

const Service = ({ title, price, time, description }) => {



  return (
    <div className="service">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <span>{price}</span>
        <span>{time}</span>
        <button className='bookService'>Agendar</button>
      </div>
    </div>
  );
}

export default Service;

