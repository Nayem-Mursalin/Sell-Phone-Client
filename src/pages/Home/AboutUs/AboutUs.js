import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <img src='https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt="" className="mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h4 className='text-lg text-primary font-bold'>About Us</h4>
                    <h1 className=" text-4xl font-bold">We are offering you to buy & sell your phone</h1>
                    <p className="py-6">We have to change our phone after somedays. so, why don't you sell your phone and buy a new one? visit our website to see leatest phone or give advertisement to sell yours.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;