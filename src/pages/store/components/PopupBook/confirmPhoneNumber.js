import React, { useContext, useState } from 'react';
import { BookingContext } from '../../../../context/bookingContext';
import { CONFIRM_BOOKING, REGISTER } from './stepsBooking';


require('./styles.css')

const ConfirmPhoneNumber = ({ setStepPopup }) => {
    const { setShowPopupBook, servicesSelected } = useContext(BookingContext);


    return (
        <>
            <div className='headerPopupBook'>
                <button className='loginBackButton' onClick={() => { setStepPopup(REGISTER) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-v-6c72fdcc="" d="M8.669 3.257a1 1 0 0 1 .152 1.314l-.078.098L3.045 11H23.2a1 1 0 0 1 .117 1.993L23.2 13H3.045l5.698 6.331a1 1 0 0 1-1.397 1.426l-.09-.088-7.2-8-.007-.01-.013-.013-.043-.055-.014-.02-.01-.015-.037-.059-.022-.04-.003-.006-.025-.053-.02-.052-.002-.004-.03-.1-.002-.006a1.017 1.017 0 0 1 0-.472l.001-.005.031-.1.002-.006.003-.008.017-.043.023-.049.005-.01.005-.009.017-.031.033-.054.003-.005.01-.015.015-.02.044-.055.011-.014.009-.009 7.2-8a1 1 0 0 1 1.412-.074z" fill="#2A2C32" fill-rule="evenodd"></path></svg>
                </button>
                <h3 className='loginHeader'>Registrate</h3>
                <button className='loginPopupBookClose closePopupBook' onClick={() => { setShowPopupBook(false) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line data-v-6c72fdcc="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-6c72fdcc="" x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div className='bodyPopupBook loginPopupBook'>
                <h3 className='titleInputLogin'>El código de confirmación es:</h3>
                <p className='subtitleInputPhoneNumber'>Introduce el código de 4 dígitos que te ha llegado por mensaje de texto.</p>

                <div className='containerConfirmPhoneNumber'>
                    <input type='text' name="phoneCode" maxLength={1} className='phoneNumberCode' />
                    <input type='text' name="phoneCode" maxLength={1} className='phoneNumberCode' />
                    <input type='text' name="phoneCode" maxLength={1} className='phoneNumberCode' />
                    <input type='text' name="phoneCode" maxLength={1} className='phoneNumberCode' />
                </div>
                <div className='optionsLogin'>
                    <div className='resendCode'>
                        <div className='resendCodeButton'>
                            <p>Reenviar código</p>
                        </div>
                        <div className='resendCodeDisclaimer'>
                            <span>Vuelva a intentarlo en 50 segundos</span>
                        </div>
                    </div>
                    <div className='changeNumberPhone' onClick={() => { setStepPopup(REGISTER) }}>
                        <p>Cambiar número de teléfono</p>
                    </div>
                </div>
                <button className='continueLogin registerButton' onClick={() => { setStepPopup(CONFIRM_BOOKING) }}>Hecho</button>
            </div>
        </>
    );
}

export default ConfirmPhoneNumber;

