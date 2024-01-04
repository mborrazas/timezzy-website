import React from 'react';


require('./styles.css')

const ServiceSelect = ({ title, price, time, description, onClick }) => {


  return (
    <div className="service">
      <div className='serviceContainerDetail'>
        <h3 className='serviceTitle'>{title}</h3>
        <p className='serviceDescription'>{description}</p>
      </div>
      <div className='containerServicePrice'>
        <div>
          <span className='priceService'>${price}</span>
          <span className='timeService'>{time}min</span>
        </div>
        <button className='bookService' onClick={() => { onClick() }}>Agendar</button>
      </div>
    </div>
  );
}

export default ServiceSelect;

