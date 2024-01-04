import React, { useContext, useState } from 'react';
import { BookingContext } from '../../../../context/bookingContext';
import { LOGIN_PASSWORD, REGISTER, SELECT_HOURS } from './stepsBooking';
 

require('./styles.css')

const Login = ({ setStepPopup }) => {
    const { setShowPopupBook, servicesSelected } = useContext(BookingContext);

    const [email, setEmail] = useState('');

    const validEmail = () => {
        if (email == 'borrazas.trabajo@gmail.com') {
            setStepPopup(LOGIN_PASSWORD)
        } else {
            setStepPopup(REGISTER)
        }
    }

    return (
        <>
            <div className='headerPopupBook'>
                <button className='loginBackButton' onClick={() => { setStepPopup(SELECT_HOURS) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-v-6c72fdcc="" d="M8.669 3.257a1 1 0 0 1 .152 1.314l-.078.098L3.045 11H23.2a1 1 0 0 1 .117 1.993L23.2 13H3.045l5.698 6.331a1 1 0 0 1-1.397 1.426l-.09-.088-7.2-8-.007-.01-.013-.013-.043-.055-.014-.02-.01-.015-.037-.059-.022-.04-.003-.006-.025-.053-.02-.052-.002-.004-.03-.1-.002-.006a1.017 1.017 0 0 1 0-.472l.001-.005.031-.1.002-.006.003-.008.017-.043.023-.049.005-.01.005-.009.017-.031.033-.054.003-.005.01-.015.015-.02.044-.055.011-.014.009-.009 7.2-8a1 1 0 0 1 1.412-.074z" fill="#2A2C32" fill-rule="evenodd"></path></svg>
                </button>
                <h3 className='loginHeader'>Iniciar sesión</h3>
                <button className='loginPopupBookClose closePopupBook' onClick={() => { setShowPopupBook(false) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line data-v-6c72fdcc="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-6c72fdcc="" x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div className='bodyPopupBook loginPopupBook'>
                <h3 className='titleInputLogin'>Mi dirección de correo electrónico es:</h3>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} className='emailInputLogin input' name="email" placeholder='Dirección de correo eletrónico' />

                <button className='continueLogin' onClick={() => { validEmail() }}>Continuar</button>
                <div className='hr-text'>
                    <span>o</span>
                </div>
                <button className='continueFacebook'>
                    <svg data-v-2b928faa="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="b-mr-2 social social-facebook b-icon" role="img" stroke-width="1.5" width="24" height="24"><path fill="currentcolor" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"></path></svg>
                    Continuar con Facebook
                </button>
                <button className='continueApple'>
                    <svg data-v-2b928faa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="b-mr-2 social b-icon" role="img" stroke-width="1.5" width="24" height="24"><path d="M16.125 1c-1.153.067-2.477.71-3.264 1.527-.71.744-1.272 1.85-1.043 2.918 1.253.033 2.511-.626 3.264-1.459.703-.779 1.236-1.866 1.043-2.986zm.068 4.443c-1.809 0-2.565 1.112-3.818 1.112-1.289 0-2.467-1.041-4.027-1.041C6.226 5.514 3 7.48 3 12.11 3 16.324 6.818 21 8.973 21c1.309.013 1.626-.823 3.402-.832 1.778-.013 2.162.843 3.473.832 1.476-.011 2.628-1.633 3.47-2.918.604-.92.853-1.39 1.32-2.43-3.472-.88-4.163-6.48 0-7.638-.785-1.341-3.08-2.57-4.445-2.57z"></path></svg>
                    Continuar con Apple
                </button>
            </div>
        </>
    );
}

export default Login;

