import React, { useContext, useState } from 'react';
import SelectHoursPopUp from './selectHoursPopUp';
import Login from './login';
import Register from './register';
import ConfirmClosePopup from './confirmClosePopup';
import LoginPassword from './loginPassword';
import ConfirmPhoneNumber from './confirmPhoneNumber';
import ConfirmBooking from './confirmBooking';
import { CHANGE_PERSONAL, CONFIRM_BOOKING, CONFIRM_PHONE_NUMBER, LOGIN, LOGIN_PASSWORD, REGISTER, SELECT_HOURS, SELECT_SERVICES } from './stepsBooking';
import { BookingContext } from '../../../../context/bookingContext';
import SelectServices from './selectServices';
import ChangePersonal from './changePersonal';

require('./styles.css')



const PopupBook = () => {

    const { stepPopupBook, setStepPopupBook } = useContext(BookingContext);

    const [showConfirmClose, setShowConfirmClose] = useState(false);


    const showStepPopup = () => {
        if (stepPopupBook == SELECT_HOURS) {
            return <SelectHoursPopUp setStepPopup={setStepPopupBook} />
        } else if (stepPopupBook == LOGIN) {
            return <Login setStepPopup={setStepPopupBook} />
        } else if (stepPopupBook == LOGIN_PASSWORD) {
            return <LoginPassword setStepPopup={setStepPopupBook} />
        } else if (stepPopupBook == CONFIRM_PHONE_NUMBER) {
            return <ConfirmPhoneNumber setStepPopup={setStepPopupBook} />
        } else if (stepPopupBook == REGISTER) {
            return <Register setStepPopup={setStepPopupBook} />
        } else if (stepPopupBook == CONFIRM_BOOKING) {
            return <ConfirmBooking setStepPopup={setStepPopupBook} />
        } else if (stepPopupBook == SELECT_SERVICES) {
            return <SelectServices setStepPopup={setStepPopupBook} />
        }else if(stepPopupBook == CHANGE_PERSONAL){
            return <ChangePersonal setStepPopup={setStepPopupBook} />
        }

    }
    return (
        <>
            {showConfirmClose && (<div className='shadowCancelPopup'>
                <ConfirmClosePopup />
            </div>)}

            <div className="shadowPopup">
                <div className='popupBook'>
                    {showStepPopup()}
                </div>
            </div>
        </>
    );
}

export default PopupBook;

