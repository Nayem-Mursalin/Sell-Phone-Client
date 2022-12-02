import React from 'react';

const AdvItem = ({ product }) => {
    const { _id, picture, product_name } = product;
    return (
        <div className={`p-6 card md:card-side shadow-xl`}>
            <figure><img src={picture} alt="Phone" /></figure>
            <div className="card-body">
                <h2 className="text-green-600">AdvertiseMent</h2>
                <h2 className="card-title">{product_name}</h2>
            </div>
        </div>
    );
};

export default AdvItem;