import React, { useState } from 'react';
import Review from './review';


require('./styles.css')

const Reviews = () => {

  const reviewsCollection = [
    { stars: 5, service: "Corte de pelo", name: "Matías Borrazás", created_date: "Nov. 17, 2023", review: "Tremendo corte", answer: "Gracias Mati", answer_date: "Nov. 20, 2023" }
  ];


  return (
    <div className="reviews">
      <h3>Reseñas</h3>
      <p>Timezzy garantiza que las reseñas son creadas por personas que hayan utilizado el servicio y estan registrados en la plataforma.</p>
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

