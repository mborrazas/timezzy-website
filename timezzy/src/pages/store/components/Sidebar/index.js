import React, { useState } from 'react';


require('./styles.css')

const Sidebar = ({ phone }) => {

    const daysCollections = {
        closeDays: [{ day: "Dic. 16,2023", hour: "15:00 - 17:00" }], days: [
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
        <div className="sidebar">
            <section>
                <h3>Tarjetas de regalo</h3>
                <p>¿Buscas el regalo perfecto? Echa un vistazo a las tarjetas de regalo disponibles.</p>
                <button>Mostrar tarjetas de regalo</button>
            </section>
            <section>
                <div className='map'>

                </div>
                <div>
                    <h3>QUIENES SOMOS</h3>
                    <p>Hair Units Installations - Hair Replacement Services - Non Surgical - Wig Shop Barbering Services</p>
                </div>
                <div>
                    <h3>HORARIO DE APERTURA Y CONTACTO</h3>
                    <div>
                        <p>{phone}</p>
                        <button>Llamar</button>
                    </div>
                </div>
                <div>
                    {daysCollections.days.map((dayObject) => (
                        <div>
                            <span>{dayObject.day}</span>
                            <span>{dayObject.hour}</span>
                        </div>
                    ))}
                    <hr />
                    {daysCollections.closeDays.map((dayObject) => (
                        <div>
                            <span>{dayObject.day}</span>
                            <span>{dayObject.hour}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sidebar;

