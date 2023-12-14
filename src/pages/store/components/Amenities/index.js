import React, { useState } from 'react';


require('./styles.css')

const Amenities = () => {

  const amenitiesCollection = [
    { title: "Espacio de estacionamiento", slug: "car" },
    { title: "Se aceptan tarjetas de crédito", slug: "credit_card" },
    { title: "Wi-Fi", slug: "wifi" },
    { title: "Apto para niños", slug: "children_accept" },
    { title: "Accesible para personas con discapacidad", slug: "disabled_person" },
  ]

  return (
    <div className="amenities">
      <h3>Comodidades</h3>
      {amenitiesCollection.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Amenities;

