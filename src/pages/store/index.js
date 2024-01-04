import React, { useState, useEffect, useContext } from 'react';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Services from './components/Services';
import PopupBook from './components/PopupBook';
import { BookingContext } from '../../context/bookingContext';


require('./styles.css')

const Store = () => {

    const { showPopupBook } = useContext(BookingContext);
    useEffect(() => {
        document.title = '💈Flawless Fades & Hair Units Studio💈 - Timezzy';
    }, []);



    const storeCollection = {
        title: "💈Flawless Fades & Hair Units Studio💈",
        address: "12345 Sunset Blvd., Los Angeles, CA 90028",
        phone: "(484) 896-0859",

    }

    return (
        <>
            <div className="store">
                <main className='containerStore'>
                    <section>
                        <h1>{storeCollection.title}</h1>
                        <address>{storeCollection.address}</address>
                    </section>
                    <Services />
                    <Gallery />
                    <Amenities />
                    <Reviews />
                </main>
                <aside>
                    <Sidebar phone={storeCollection.phone} />
                </aside>
            </div>
            {showPopupBook && (<PopupBook />)}
            <footer></footer>
        </>
    );
}

export default Store;

