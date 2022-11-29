import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='https://images.unsplash.com/photo-1604194868790-e98f6e9c5ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGlwaG9uZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Want to buy a phone?</h1>
                        <p className="py-6">We are giving you the oppurchunity to buy a newlike in very cheap price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;