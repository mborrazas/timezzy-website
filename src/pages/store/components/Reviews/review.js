import React, { useState } from 'react';
import { starElement } from './utils';


require('./styles.css')

const Review = ({ stars, service, name, createdDate, review, answer, answerDate }) => {




  return (
    <div className="review">
      <div>
        <div className='containerHeaderReview'>
          <div>
            {starElement(stars)}
            <span className='containerServiceName'>{service}</span>
          </div>
          <div className='containerNameReview'>
            <span className='nameReview'>{name}</span>
            •
            <span className='dateReview'>{createdDate}</span>
          </div>
        </div>
        <p className='reviewMessage'>{review}</p>
      </div>
      <div className='answer'>
        <div className='answerHeader'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12.697 7.606c-.602-1.34-2.228-2.01-4.88-2.01H6.57V4.319a.292.292 0 0 0-.106-.224A.364.364 0 0 0 6.212 4a.364.364 0 0 0-.251.095L3.106 6.648A.292.292 0 0 0 3 6.873c0 .086.035.16.106.224L5.96 9.65c.07.063.154.095.251.095s.18-.032.25-.095a.292.292 0 0 0 .107-.224V8.149h1.249c.364 0 .69.01.978.03.288.02.575.056.86.107.284.052.53.122.741.212.21.09.406.206.588.347.182.141.331.309.447.504.115.194.205.424.27.69.065.266.098.567.098.903 0 .183-.01.387-.028.613 0 .02-.005.06-.014.117a.921.921 0 0 0-.014.133c0 .05.016.09.047.124.032.033.075.05.131.05.06 0 .112-.028.156-.085a.56.56 0 0 0 .073-.11 8.36 8.36 0 0 0 .134-.269c.472-.947.708-1.697.708-2.249 0-.661-.099-1.215-.296-1.66z"></path></svg>
          <span>Respondido: {answerDate}</span>
        </div>
        <p className='answerMessage'>{answer}</p>
      </div>
    </div>
  );
}

export default Review;

