import React, { useState, useContext } from 'react';


require('./styles.css')


const NavigationMobile = ({ sectionSelected, changeSection }) => {

    return (
        <div className="navigationMobile">
            <button className={sectionSelected === 'service' ? "selected" : null} onClick={() => { changeSection('service') }}>Servicios</button>
            <button className={sectionSelected === 'details' ? "selected" : null} onClick={() => { changeSection('details') }}>Detalles</button>
            <button className={sectionSelected === 'reviews' ? "selected" : null} onClick={() => { changeSection('reviews') }}>Reseñas</button>
            <button className={sectionSelected === 'gallery' ? "selected" : null} onClick={() => { changeSection('gallery') }}>Fotos</button>
        </div>
    );
}

export default NavigationMobile;

