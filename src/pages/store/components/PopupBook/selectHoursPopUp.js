import React, { useContext, useState } from 'react';
import { BookingContext } from '../../../../context/bookingContext';
import { CHANGE_PERSONAL, LOGIN, SELECT_SERVICES } from './stepsBooking';


require('./styles.css')

const SelectHoursPopUp = ({ setStepPopup }) => {
    const { setShowPopupBook, servicesSelected } = useContext(BookingContext);

    const calcPrice = () => {
        let price = 0;
        servicesSelected.map((service) => {
            price += service.price;
        });
        return price;
    }

    const calcHour = () => {
        let min = 0;
        servicesSelected.map((service) => {
            min += service.time;
        });
        return min;
    }


    return (
        <>
            <div className='headerPopupBook'>
                <div className='titlePopupBook titlePopupBookCenter'>
                    <h3>Diciembre 2023</h3>
                </div>
                <button className='closePopupBook' onClick={() => { setShowPopupBook(false) }}>
                    <svg data-v-6c72fdcc="" xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line data-v-6c72fdcc="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-6c72fdcc="" x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div className='bodyPopupBook'>
                <div className='dateContainerPopupBook'>
                    <button className='backDayPopupBook'>
                        <svg stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" stroke-width="1.5" fill="none" height="16" width="16" viewBox="0 0 16 16"><path d="M10 2l-6 6l6 6"></path></svg>
                    </button>
                    <div className='dayContainerPopupBook'>
                        <div className='dayPopupBook currentDay'>
                            <p>Lun.</p>
                            <p>18</p>
                        </div>
                        <div className='dayPopupBook selectedDay'>
                            <p>Mar.</p>
                            <p>19</p>
                        </div>
                        <div className='dayPopupBook'>
                            <p>Mié.</p>
                            <p>20</p>
                        </div>
                        <div className='dayPopupBook'>
                            <p>Jue.</p>
                            <p>21</p>
                        </div>
                    </div>
                    <button className='nextDayPopupBook'>
                        <svg stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" stroke-width="1.5" fill="none" height="16" width="16" viewBox="0 0 16 16"><path d="M10 2l-6 6l6 6"></path></svg>
                    </button>
                </div>
                <div className='containerSpaceDay'>
                    <div className='spaceDay selected'>
                        <span>Mañana</span>
                    </div>
                    <div className='spaceDay'>
                        <span>Tarde</span>
                    </div>
                    <div className='spaceDay'>
                        <span>Noche</span>
                    </div>
                </div>
                <div className='containerHoursPopupBook'>
                    <button className='backHourPopupBook'>
                        <svg stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" stroke-width="1.5" fill="none" height="16" width="16" viewBox="0 0 16 16"><path d="M10 2l-6 6l6 6"></path></svg>
                    </button>
                    <div className='hoursPopupBook'>
                        <div className='hour'>
                            <span>11:15 AM</span>
                        </div>
                        <div className='hour'>
                            <span>12:00 PM</span>
                        </div>
                        <div className='hour'>
                            <span>1:30 PM</span>
                        </div>
                    </div>
                    <button className='nextHourPopupBook'>
                        <svg stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" stroke-width="1.5" fill="none" height="16" width="16" viewBox="0 0 16 16"><path d="M10 2l-6 6l6 6"></path></svg>
                    </button>
                </div>
                <div className='containerServices'>
                    {servicesSelected.map((service) => (
                        <div className='servicePopup'>
                            <div className='headerService'>
                                <div className='removeService'>
                                    <svg stroke-linejoin="round" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" height="24" width="24" class="icon" xmlns="http://www.w3.org/2000/svg"><line y2="18" x2="6" y1="6" x1="18"></line><line y2="18" x2="18" y1="6" x1="6"></line></svg>
                                </div>
                                <div className='containerServicesTitle'>
                                    <h3>{service.title}</h3>
                                </div>
                                <div className='containerPriceService'>
                                    <span className='priceService'>${service.price}</span>
                                    <span className='hours'> 3:45 PM - 4:00 PM</span>
                                </div>
                            </div>
                            <div className='footerService'>
                                <div className='containerServiceEmployee'>
                                    <svg viewBox="0 0 56 56" height="56" width="56" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd" fill="none"><g><g><g><g transform="translate(-201.000000, -232.000000) translate(177.000000, 216.000000) translate(24.000000, 16.000000)" fill="#FFF"><circle r="28" cy="28" cx="28"></circle></g><path transform="translate(-201.000000, -232.000000) translate(177.000000, 216.000000) translate(24.000000, 16.000000)" d="M28 0c15.464 0 28 12.536 28 28S43.464 56 28 56 0 43.464 0 28 12.536 0 28 0zm0 34.41c-8.387 0-15.187 6.33-15.187 14.14 0 .046-.002.092-.008.138 4.254 3.13 9.508 4.979 15.195 4.979 5.687 0 10.941-1.85 15.196-4.98-.007-.045-.01-.09-.01-.137 0-7.81-6.799-14.14-15.186-14.14zm0-32.077C13.825 2.333 2.333 13.825 2.333 28c0 7.313 3.059 13.912 7.966 18.587C11.343 38.346 18.87 31.954 28 31.954c9.13 0 16.657 6.392 17.7 14.632 4.908-4.674 7.967-11.273 7.967-18.586C53.667 13.825 42.175 2.333 28 2.333zm-.586 8.556c5.046 0 9.137 4.05 9.137 9.045 0 4.996-4.091 9.046-9.137 9.046s-9.136-4.05-9.136-9.046c0-4.995 4.09-9.045 9.136-9.045zm0 2.493c-3.655 0-6.619 2.933-6.619 6.552 0 3.62 2.964 6.553 6.62 6.553 3.655 0 6.618-2.934 6.618-6.553 0-3.619-2.963-6.552-6.619-6.552z" fill="#E6E6E6"></path></g></g></g></g></svg>
                                    <p>Cualquiera</p>
                                </div>
                                <div className='containerButtonChangeEmployee'>
                                    <button onClick={() => { setStepPopup(CHANGE_PERSONAL) }}>Cambiar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button className='addOtherService' onClick={() => setStepPopup(SELECT_SERVICES)}>
                        <svg stroke-linejoin="round" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" height="24" width="24" class="icon" xmlns="http://www.w3.org/2000/svg"><line y2="19" x2="12" y1="5" x1="12"></line><line y2="12" x2="19" y1="12" x1="5"></line></svg>
                        <span>Añadir otro servicio</span>
                    </button>
                </div>
            </div>
            <div className='footerPopupBook footerPopupBookSelectHours'>
                <div className='containerTotal'>
                    <span className='totalTitle'>Total:</span>
                    <span className='priceTotal'>${calcPrice()}</span>
                    <span className='minTotal'>{calcHour()}min</span>
                </div>
                <button className='continuePopupBook' onClick={() => { setStepPopup(LOGIN) }}>Continuar</button>
            </div>
        </>
    );
}

export default SelectHoursPopUp;

