import React, { useContext, useState } from 'react';
import { BookingContext } from '../../../../context/bookingContext';


require('./styles.css')

const ConfirmClosePopup = () => {
    const { setShowPopupBook, servicesSelected } = useContext(BookingContext);


    return (
        <>
            <div className='confirmClosePopup'>
                <h3 className='confirmClosePopupTitle'>¿Cancelar reserva?</h3>
                <p className='confirmClosePopupSubtitle'>¿Seguro que quieres cancelar la reserva? Los cambios no guardados se perderán</p>
                <button className='continueBooking'>Continuar reservando</button>
                <button className='cancelNameStore'>Sí, descartar</button>
            </div>
        </>
    );
}

export default ConfirmClosePopup;

