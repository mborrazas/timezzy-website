import React, { useState } from 'react';
import Giftcard from '../Giftcard';
import Hours from '../Hours';


require('./styles.css')

const Sidebar = ({ phone }) => {


    return (
        <div className="sidebar">
            <Giftcard />
            <section className='sidebarContainer'>
                <div className='map'>

                </div>
                <div className='containerDescriptionStore'>
                    <h3 className='titleDescriptionStore'>QUIENES SOMOS</h3>
                    <p className='descriptionStore'>Hair Units Installations - Hair Replacement Services - Non Surgical - Wig Shop Barbering Services</p>
                </div>
                <div>
                    <h3 className='titleHours'>HORARIO DE APERTURA Y CONTACTO</h3>
                    <hr className='hrSidebar' />
                    <div className='phoneSidebar'>
                        <div className='phoneContainer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.15 0a3.013 3.013 0 0 1 3.008 2.836l.005.177v17.974a3.013 3.013 0 0 1-2.835 3.008L16.15 24H7.013a3.013 3.013 0 0 1-3.008-2.836L4 20.987V3.013A3.013 3.013 0 0 1 6.836.005L7.013 0h9.138zm0 1.506H7.014c-.786 0-1.431.602-1.5 1.37l-.007.137v17.974c0 .786.602 1.431 1.37 1.5l.137.007h9.138c.785 0 1.43-.602 1.5-1.37l.006-.137V3.013c0-.786-.602-1.431-1.37-1.5l-.136-.007zM11.583 19.28a1.155 1.155 0 1 1 0 2.31 1.155 1.155 0 0 1 0-2.31zm1.205-16.87a.753.753 0 0 1 .102 1.5l-.102.006h-2.41a.753.753 0 0 1-.103-1.5l.103-.006h2.41z"></path></svg>
                            <p>{phone}</p>
                        </div>
                        <a href="tel:">
                            <button className='phoneAction'>Llamar</button>
                        </a>
                    </div>
                    <hr className='hrSidebar' />
                </div>
                <Hours />
            </section>
        </div>
    );
}

export default Sidebar;

