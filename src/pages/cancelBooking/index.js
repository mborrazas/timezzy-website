import React, { useState } from 'react';


require('./styles.css')

const CancelBooking = () => {

    return (
        <>
            <div className="cancelContainer">
                <h2>Diciembre, Martes 26 2023</h2>
                <h3>9:30 - 10:30 (40min)</h3>
                <p>Peluquería lokita Hair</p>
                <div className='serviceAndPrice'>
                    <div className='serviceCancel'>
                        <div className='containerNameAndPrice'>
                            <div>
                                <p className='textColor'>Corte de pelo</p>
                                <p className='textColor people'>Cualquiera</p>
                            </div>
                            <div className='containerPriceAndHour'>
                                <p className='textColor textRight'>12,00$</p>
                                <p className='textColor hours'>9:30 - 10:30</p>
                            </div>
                        </div>
                        <div className='containerNameAndPrice'>
                            <div>
                                <p className='textColor'>Corte de pelo</p>
                                <p className='textColor people'>Cualquiera</p>

                            </div>
                            <div className='containerPriceAndHour'>
                                <p className='textColor textRight'>12,00$</p>
                                <p className='textColor hours'>9:30 - 10:30</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='textRight totalPrice'>Total: <span>$ 12,00</span></p>
                    </div>
                </div>
                <button className='continue'>Mantener reserva</button>
                <button className='cancel'>Cancelar reserva</button>
            </div>
            <footer></footer>
        </>
    );
}

export default CancelBooking;

