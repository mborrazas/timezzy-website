import React, { useState, useEffect, useContext } from 'react';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Services from './components/Services';
import PopupBook from './components/PopupBook';
import { BookingContext } from '../../context/bookingContext';
import NavigationMobile from './components/NavigationMobile';
import FullGallery from './components/FullGallery';


require('./styles.css')

const Store = () => {

    const [sectionMobileShow, setSectionMobileShow] = useState('service');

    const { showPopupBook } = useContext(BookingContext);
    const [isDesktop, setIsDesktop] = useState(false);

    const handleWindowResize = () => {
        const resolution = window.innerWidth;
        const mobile = resolution >= 320 && resolution <= 480;
        const tablet = resolution >= 768 && resolution <= 1024;
        setIsDesktop(!mobile && !tablet);
    }

    useEffect(() => {
        document.title = '💈Flawless Fades & Hair Units Studio💈 - Timezzy';
        window.addEventListener("resize", handleWindowResize.bind(this));
        handleWindowResize();
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
                    <NavigationMobile sectionSelected={sectionMobileShow} changeSection={(section) => { setSectionMobileShow(section) }} />
                    {(sectionMobileShow === 'service' || isDesktop) && <Services />}
                    {(sectionMobileShow === 'gallery' && !isDesktop) && <FullGallery />}
                    {isDesktop && <Gallery />}
                    {(sectionMobileShow === 'amenities' || isDesktop) && <Amenities />}
                    {(sectionMobileShow === 'reviews' || isDesktop) && <Reviews />}
                </main>

                {(sectionMobileShow === 'details' || isDesktop) && <aside>
                    <Sidebar phone={storeCollection.phone} />
                </aside>}

            </div>
            {showPopupBook && (<PopupBook />)}
            <footer></footer>
        </>
    );
}

export default Store;

