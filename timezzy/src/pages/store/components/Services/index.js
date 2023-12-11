import React, { useState } from 'react';
import Service from './service';


require('./styles.css')

const Services = () => {

  const servicesCollection = [
    {
      category: "Servicios más populares", services:
        [{ time: "20min", price: "$38.00", title: "Speciality Haircut (Skin fades, blow out, Mohawk)", description: "In 30 minutes time you'll get a specility haircut" },
        { time: "45min", price: "$44.00", title: "Re-Installation & Cleaning", description: "In 30 minutes time you'll get a specility haircut" }]
    },
    {
      category: "Extras", services:
        [{ time: "20min", price: "$38.00", title: "Speciality Haircut (Skin fades, blow out, Mohawk)", description: "In 30 minutes time you'll get a specility haircut" },
        { time: "45min", price: "$44.00", title: "Re-Installation & Cleaning", description: "In 30 minutes time you'll get a specility haircut" }]
    }
  ]


  return (
    <div className="sidebar">
      {servicesCollection.map((serviceCollection) => (
        <div>
          <h2>{serviceCollection.category}</h2>
          {serviceCollection.map((service) => (
            <Service title={service.title} price={service.price} time={service.price} description={service.description} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Services;

