import React, { useState } from 'react';


require('./styles.css')

const Gallery = () => {



  return (
    <div className="gallery">
      <h3>Ver nuestro trabajo</h3>
      <div className='containerGallery'>
        <div className='first'><img src="/work-images/image-1.jpeg" /></div>
        <div className='second'>
          <div>
            <img src="/work-images/image-2.jpeg" />
            <img src="/work-images/image-3.jpeg" />
          </div>
          <div>
            <img src="/work-images/image-4.jpeg" />
            <img src="/work-images/image-5.jpeg" />
          </div>
        </div>
      </div>
      <button className='showWorks'>VER TODOS NUESTROS TRABAJOS</button>
    </div>
  );
}

export default Gallery;

