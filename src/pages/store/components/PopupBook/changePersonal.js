import React, { useContext, useState } from 'react';
import { BookingContext } from '../../../../context/bookingContext';
import { SELECT_HOURS } from './stepsBooking';


require('./styles.css')

const ChangePersonal = ({ setStepPopup }) => {
    const { setShowPopupBook, servicesSelected } = useContext(BookingContext);


    return (
        <>
            <div className='headerPopupBook'>
                <button className='loginBackButton' onClick={() => { setStepPopup(SELECT_HOURS) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-v-6c72fdcc="" d="M8.669 3.257a1 1 0 0 1 .152 1.314l-.078.098L3.045 11H23.2a1 1 0 0 1 .117 1.993L23.2 13H3.045l5.698 6.331a1 1 0 0 1-1.397 1.426l-.09-.088-7.2-8-.007-.01-.013-.013-.043-.055-.014-.02-.01-.015-.037-.059-.022-.04-.003-.006-.025-.053-.02-.052-.002-.004-.03-.1-.002-.006a1.017 1.017 0 0 1 0-.472l.001-.005.031-.1.002-.006.003-.008.017-.043.023-.049.005-.01.005-.009.017-.031.033-.054.003-.005.01-.015.015-.02.044-.055.011-.014.009-.009 7.2-8a1 1 0 0 1 1.412-.074z" fill="#2A2C32" fill-rule="evenodd"></path></svg>
                </button>
                <h3 className='loginHeader'>Seleccionar empleado</h3>
                <button className='loginPopupBookClose closePopupBook' onClick={() => { setShowPopupBook(false) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line data-v-6c72fdcc="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-6c72fdcc="" x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div className='bodyPopupBook changePersonalPopup'>
                <div className='containerPersonal'>
                    <div className='personalSelect'>
                        <svg viewBox="0 0 56 56" height="56" width="56" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd" fill="none"><g><g><g><g transform="translate(-201.000000, -232.000000) translate(177.000000, 216.000000) translate(24.000000, 16.000000)" fill="#FFF"><circle r="28" cy="28" cx="28"></circle></g><path transform="translate(-201.000000, -232.000000) translate(177.000000, 216.000000) translate(24.000000, 16.000000)" d="M28 0c15.464 0 28 12.536 28 28S43.464 56 28 56 0 43.464 0 28 12.536 0 28 0zm0 34.41c-8.387 0-15.187 6.33-15.187 14.14 0 .046-.002.092-.008.138 4.254 3.13 9.508 4.979 15.195 4.979 5.687 0 10.941-1.85 15.196-4.98-.007-.045-.01-.09-.01-.137 0-7.81-6.799-14.14-15.186-14.14zm0-32.077C13.825 2.333 2.333 13.825 2.333 28c0 7.313 3.059 13.912 7.966 18.587C11.343 38.346 18.87 31.954 28 31.954c9.13 0 16.657 6.392 17.7 14.632 4.908-4.674 7.967-11.273 7.967-18.586C53.667 13.825 42.175 2.333 28 2.333zm-.586 8.556c5.046 0 9.137 4.05 9.137 9.045 0 4.996-4.091 9.046-9.137 9.046s-9.136-4.05-9.136-9.046c0-4.995 4.09-9.045 9.136-9.045zm0 2.493c-3.655 0-6.619 2.933-6.619 6.552 0 3.62 2.964 6.553 6.62 6.553 3.655 0 6.618-2.934 6.618-6.553 0-3.619-2.963-6.552-6.619-6.552z" fill="#E6E6E6"></path></g></g></g></g></svg>
                        <div className='containerNamePersonal'>
                            <h3 className="namePersonal">Cualquiera</h3>
                            <p className='availability availabilityCheck'>Mayor disponibilidad</p>
                        </div>
                    </div>
                    <div className='personalSelect'>
                        <svg viewBox="0 0 56 56" height="56" width="56" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd" fill="none"><g><g><g><g transform="translate(-201.000000, -232.000000) translate(177.000000, 216.000000) translate(24.000000, 16.000000)" fill="#FFF"><circle r="28" cy="28" cx="28"></circle></g><path transform="translate(-201.000000, -232.000000) translate(177.000000, 216.000000) translate(24.000000, 16.000000)" d="M28 0c15.464 0 28 12.536 28 28S43.464 56 28 56 0 43.464 0 28 12.536 0 28 0zm0 34.41c-8.387 0-15.187 6.33-15.187 14.14 0 .046-.002.092-.008.138 4.254 3.13 9.508 4.979 15.195 4.979 5.687 0 10.941-1.85 15.196-4.98-.007-.045-.01-.09-.01-.137 0-7.81-6.799-14.14-15.186-14.14zm0-32.077C13.825 2.333 2.333 13.825 2.333 28c0 7.313 3.059 13.912 7.966 18.587C11.343 38.346 18.87 31.954 28 31.954c9.13 0 16.657 6.392 17.7 14.632 4.908-4.674 7.967-11.273 7.967-18.586C53.667 13.825 42.175 2.333 28 2.333zm-.586 8.556c5.046 0 9.137 4.05 9.137 9.045 0 4.996-4.091 9.046-9.137 9.046s-9.136-4.05-9.136-9.046c0-4.995 4.09-9.045 9.136-9.045zm0 2.493c-3.655 0-6.619 2.933-6.619 6.552 0 3.62 2.964 6.553 6.62 6.553 3.655 0 6.618-2.934 6.618-6.553 0-3.619-2.963-6.552-6.619-6.552z" fill="#E6E6E6"></path></g></g></g></g></svg>
                        <div className='containerNamePersonal'>
                            <h3 className="namePersonal">Matías Borrazás</h3>
                            <p className='availability availabilityCheck'>Disponible</p>
                        </div>
                    </div>
                    <div className='personalSelect'>
                        <svg viewBox="0 0 56 56" height="56" width="56" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd" fill="none"><g><g><g><g transform="translate(-201.000000, -232.000000) translate(177.000000, 216.000000) translate(24.000000, 16.000000)" fill="#FFF"><circle r="28" cy="28" cx="28"></circle></g><path transform="translate(-201.000000, -232.000000) translate(177.000000, 216.000000) translate(24.000000, 16.000000)" d="M28 0c15.464 0 28 12.536 28 28S43.464 56 28 56 0 43.464 0 28 12.536 0 28 0zm0 34.41c-8.387 0-15.187 6.33-15.187 14.14 0 .046-.002.092-.008.138 4.254 3.13 9.508 4.979 15.195 4.979 5.687 0 10.941-1.85 15.196-4.98-.007-.045-.01-.09-.01-.137 0-7.81-6.799-14.14-15.186-14.14zm0-32.077C13.825 2.333 2.333 13.825 2.333 28c0 7.313 3.059 13.912 7.966 18.587C11.343 38.346 18.87 31.954 28 31.954c9.13 0 16.657 6.392 17.7 14.632 4.908-4.674 7.967-11.273 7.967-18.586C53.667 13.825 42.175 2.333 28 2.333zm-.586 8.556c5.046 0 9.137 4.05 9.137 9.045 0 4.996-4.091 9.046-9.137 9.046s-9.136-4.05-9.136-9.046c0-4.995 4.09-9.045 9.136-9.045zm0 2.493c-3.655 0-6.619 2.933-6.619 6.552 0 3.62 2.964 6.553 6.62 6.553 3.655 0 6.618-2.934 6.618-6.553 0-3.619-2.963-6.552-6.619-6.552z" fill="#E6E6E6"></path></g></g></g></g></svg>
                        <div className='containerNamePersonal'>
                            <h3 className="namePersonal">Tlaloc Meneghetti</h3>
                            <p className='availability notAvailable'>Tiene otras reservas a la hora seleccionada</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ChangePersonal;

