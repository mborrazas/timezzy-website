import React, { useState } from 'react';


require('./styles.css')

const Review = ({ stars, service, name, createdDate, review, answer, answerDate }) => {


  const starElement = () => {
    return [...Array(stars)].map((e, i) => <svg className='startReview' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .06c-.82 0-1.548.528-1.801 1.308L8.157 7.134a.412.412 0 0 1-.37.3l-5.906.249c-.832.074-1.506.619-1.743 1.382a1.974 1.974 0 0 0 .622 2.104l4.653 3.811c.143.12.204.323.148.51l-1.605 5.971a1.916 1.916 0 0 0 .683 2.076c.645.49 1.526.524 2.207.086l4.943-3.448a.356.356 0 0 1 .416-.004l4.968 3.438c.732.432 1.594.373 2.218-.12.582-.46.844-1.21.686-1.925l-1.633-6.079a.493.493 0 0 1 .153-.513l4.637-3.783a1.974 1.974 0 0 0-1.078-3.488l-5.949-.25a.4.4 0 0 1-.357-.28l-2.055-5.82A1.888 1.888 0 0 0 12 .06z"></path></svg>)
  }

  return (
    <div className="review">
      <div>
        <div>
          <div>
            {starElement()}
            {service}
          </div>
          <div>
            {name}
            {createdDate}
          </div>
        </div>
        <p>{review}</p>
        <div>
          <button className='reportReview'>
            Informar
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 .05a.75.75 0 0 1 .743.648L4.75.8v1.723a6.948 6.948 0 0 1 8.18.946c2.112 2.104 4.82 2.5 6.543.798a.75.75 0 0 1 1.27.43l.007.103v9.6a.75.75 0 0 1-.204.515 5.974 5.974 0 0 1-4.346 1.874c-1.645 0-3.217-.678-4.31-1.839a5.434 5.434 0 0 0-7.14-.21v8.46a.75.75 0 0 1-1.493.102L3.25 23.2V.8A.75.75 0 0 1 4 .05zm.75 4.29v8.583a6.957 6.957 0 0 1 8.196.962 4.474 4.474 0 0 0 6.153.338l.151-.136V6.27l-.17.086c-2.19 1.037-4.897.361-7.005-1.627l-.184-.179a5.435 5.435 0 0 0-6.943-.365l-.198.155z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;

