import React, { useState } from 'react';
import Review from './review';
import { starElement } from './utils';


require('./styles.css')

const Reviews = () => {

  const reviewsCollection = [
    { stars: 5, service: "Speciality Haircut (Skin fades, blow out, Mohawk)", name: "Matías Borrazás", created_date: "Nov. 17, 2023", review: "Tremendo corte", answer: "Gracias Mati", answer_date: "Nov. 20, 2023" }
  ];


  return (
    <div className="reviews">
      <h3>Reseñas</h3>
      <div className='reviewDisclaimerStars'>
        <p className='disclaimer'>
          Timezzy garantiza que las reseñas con la etiqueta "Usuario verificado por Timezzy" han sido añadidas por usuarios registrados de Timezzy que han tenido una cita con el proveedor.
          Un usuario registrado de Timezzy solo tiene la oportunidad de agregar una reseña después de que se le haya brindado el servicio.
        </p>
        <div className='containerStars'>
          <p className='calificactionTotal'>5.0<span>/5</span></p>
          <div className='starstotal'>
            {starElement(5)}
          </div>
          <p className='reviewDiscailmer'>Basado en 307 reseñas</p>
        </div>
      </div>
      {reviewsCollection.map((review) => (
        <Review
          stars={review.stars}
          service={review.service}
          name={review.name}
          createdDate={review.created_date}
          review={review.review}
          answer={review.answer}
          answerDate={review.answer_date}
        />
      ))}
    </div>
  );
}

export default Reviews;

