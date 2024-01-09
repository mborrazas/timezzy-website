import React, { useState } from 'react';


require('./styles.css')

const FullGallery = () => {



    return (
        <div className="fullGallery">
            <div>
                <img src="/work-images/image-1.jpeg" />
            </div>
            <div>
                <img src="/work-images/image-2.jpeg" />
            </div>
            <div>
                <img src="/work-images/image-3.jpeg" />
            </div>
            <div>
                <img src="/work-images/image-4.jpeg" />
            </div>
            <div>
                <img src="/work-images/image-5.jpeg" />
            </div>
        </div>
    );
}

export default FullGallery;

