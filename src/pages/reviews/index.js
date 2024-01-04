import React, { useState } from 'react';


require('./styles.css')

const Reviews = () => { 


    const storeCollection = {
        title: "💈Flawless Fades & Hair Units Studio💈",
        address: "12345 Sunset Blvd., Los Angeles, CA 90028",
        phone: "(484) 896-0859",

    }

    return (
        <>
            <div className="reviewContainer">
                <h1 className='reviewNameStore'>{storeCollection.title}</h1>
                <p className='serviceInReview'>Speciality Haircut (Skin fades, blow out, Mohawk)</p>
                <div className='containerTitleReview'>
                    <h2>Matías, ¿Cómo te fue en tu cita?</h2>
                    <textarea placeholder='Escribe tu opinión' className='containerBoxReview'></textarea>
                </div>
                <button className='createReview'>Publicar</button>
            </div>
            <footer></footer>
        </>
    );
}

export default Reviews;

