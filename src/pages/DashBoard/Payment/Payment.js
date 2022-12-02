import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const order = useLoaderData();
    const { name, price } = order;
    console.log(order);
    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className='text-3xl'>Please pay <strong>{price}</strong> for your {name}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkoutform
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;