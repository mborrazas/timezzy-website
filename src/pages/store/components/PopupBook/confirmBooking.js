import React, { useContext, useState } from 'react';
import { BookingContext } from '../../../../context/bookingContext';
import { SELECT_HOURS } from './stepsBooking';


require('./styles.css')

const ConfirmBooking = ({ setStepPopup }) => {
    const { setShowPopupBook, servicesSelected } = useContext(BookingContext);


    return (
        <>
            <div className='headerPopupBook'>
                <button className='loginBackButton' onClick={() => { setStepPopup(SELECT_HOURS) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-v-6c72fdcc="" d="M8.669 3.257a1 1 0 0 1 .152 1.314l-.078.098L3.045 11H23.2a1 1 0 0 1 .117 1.993L23.2 13H3.045l5.698 6.331a1 1 0 0 1-1.397 1.426l-.09-.088-7.2-8-.007-.01-.013-.013-.043-.055-.014-.02-.01-.015-.037-.059-.022-.04-.003-.006-.025-.053-.02-.052-.002-.004-.03-.1-.002-.006a1.017 1.017 0 0 1 0-.472l.001-.005.031-.1.002-.006.003-.008.017-.043.023-.049.005-.01.005-.009.017-.031.033-.054.003-.005.01-.015.015-.02.044-.055.011-.014.009-.009 7.2-8a1 1 0 0 1 1.412-.074z" fill="#2A2C32" fill-rule="evenodd"></path></svg>
                </button>
                <h3 className='loginHeader'>Confirmar detalles</h3>
                <button className='loginPopupBookClose closePopupBook' onClick={() => { setShowPopupBook(false) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line data-v-6c72fdcc="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-6c72fdcc="" x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div className='bodyPopupBook confirmBookingPopup'>
                <h3 className='titleInputLogin'>Diciembre, Martes 26 2023</h3>
                <p className='confirmBookingHours'>9:30 - 10:30 (40min)</p>
                <p className='confirmBookingNameBussines'>Peluqueria lokishow</p>

                <div>
                    <div className='service'>
                        <div className='containerNameAndPrice'>
                            <div>
                                <p className='textColor'>Corte de pelo</p>
                                <p className='textColor people'>Cualquiera</p>
                            </div>
                            <div>
                                <p className='textColor textRight'>12,00$</p>
                                <p className='textColor hours'>9:30 - 10:30</p>
                            </div>
                        </div>
                        <div className='containerNameAndPrice'>
                            <div>
                                <p className='textColor'>Corte de pelo</p>
                                <p className='textColor people'>Cualquiera</p>

                            </div>
                            <div>
                                <p className='textColor textRight'>12,00$</p>
                                <p className='textColor hours'>9:30 - 10:30</p>
                            </div>
                        </div>
                        <div>
                            <p className='textRight totalPrice'>Total: <span>$ 12,00</span></p>
                        </div>
                    </div>
                </div>


                <input type="text" placeholder='Dejar una nota (opcional)' className='note input' />

                <hr />
                <div className='containerPrice'>
                    <span className='titleConfirmPrice'>Total a pagar</span>
                    <span className='totalPriceConfirm'>$ 12,00</span>
                </div>
                <button className='continueLogin confirmButton'>Confirmar y reservar</button>
            </div>
        </>
    );
}

export default ConfirmBooking;

