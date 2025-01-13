import React from 'react';
import Image from 'next/image';

const Preloader = () => {
    return (
        <div className="hero notification is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <Image
                        src="/images/tube-spinner.svg"
                        alt="Loading"
                        className="spinner"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
