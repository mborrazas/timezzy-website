import React, { useState } from 'react';
import Giftcard from '../Giftcard';


require('./styles.css')

const Hours = ({ phone }) => {

    const daysCollections = {
        closeDays: [{ day: "Dic. 16, 2023", hour: "15:00 - 17:00" }], days: [
            { day: "Lunes", hour: "09:00 - 18:00" },
            { day: "Martes", hour: "09:00 - 18:00" },
            { day: "Miercoles", hour: "09:00 - 18:00" },
            { day: "Jueves", hour: "09:00 - 18:00" },
            { day: "Viernes", hour: "09:00 - 18:00" },
            { day: "Sabado", hour: "Cerrado" },
            { day: "Domingo", hour: "Cerrado" },
        ]
    }

    return (

        <div className='hours'>
            {daysCollections.days.map((dayObject) => (
                <div className='dayHourContainer'>
                    <div className='dayContainer'>
                        <p className='day'>{dayObject.day}</p>
                    </div>
                    <div className='hourContainer'>
                        <p className='hour'>{dayObject.hour}</p>
                    </div>
                </div>
            ))}
            <hr className='hrSidebar' />
            {daysCollections.closeDays.map((dayObject) => (
                <div className='dayHourContainer'>
                    <div className='dayContainer'>
                        <p className='day'>{dayObject.day}</p>
                    </div>
                    <div className='hourContainer'>
                        <p className='hour'>{dayObject.hour}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Hours;

