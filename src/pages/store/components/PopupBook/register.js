import React, { useContext, useState } from 'react';
import { BookingContext } from '../../../../context/bookingContext';
import { CONFIRM_PHONE_NUMBER, LOGIN } from './stepsBooking';


require('./styles.css')

const Register = ({ setStepPopup }) => {
    const { setShowPopupBook, servicesSelected } = useContext(BookingContext);


    return (
        <>
            <div className='headerPopupBook'>
                <button className='loginBackButton' onClick={() => { setStepPopup(LOGIN) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-v-6c72fdcc="" d="M8.669 3.257a1 1 0 0 1 .152 1.314l-.078.098L3.045 11H23.2a1 1 0 0 1 .117 1.993L23.2 13H3.045l5.698 6.331a1 1 0 0 1-1.397 1.426l-.09-.088-7.2-8-.007-.01-.013-.013-.043-.055-.014-.02-.01-.015-.037-.059-.022-.04-.003-.006-.025-.053-.02-.052-.002-.004-.03-.1-.002-.006a1.017 1.017 0 0 1 0-.472l.001-.005.031-.1.002-.006.003-.008.017-.043.023-.049.005-.01.005-.009.017-.031.033-.054.003-.005.01-.015.015-.02.044-.055.011-.014.009-.009 7.2-8a1 1 0 0 1 1.412-.074z" fill="#2A2C32" fill-rule="evenodd"></path></svg>
                </button>
                <h3 className='loginHeader'>Registrate</h3>
                <button className='loginPopupBookClose closePopupBook' onClick={() => { setShowPopupBook(false) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line data-v-6c72fdcc="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-6c72fdcc="" x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div className='bodyPopupBook loginPopupBook'>
                <h3 className='titleInputLogin'>Crea tu cuenta de Timezzy</h3>

                <input type="email" className='input emailRegister' name="email" placeholder='Dirección de correo eletrónico' />
                <input type="text" className='input' name="name" placeholder='Nombre' />
                <input type="text" className='input' name="lastname" placeholder='Apellidos' />
                <input type="phone" className='input' name="phone" placeholder='Número de teléfono' />
                <input type="password" className='input' name="password" placeholder='Contraseña' />

                <button className='continueLogin registerButton' onClick={() => { setStepPopup(CONFIRM_PHONE_NUMBER) }}>Crear cuenta</button>
            </div>
        </>
    );
}

export default Register;

