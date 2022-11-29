import React from 'react';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal/ProductModal';

const ProductItem = ({ product }) => {
    const { _id, product_name, seller_name, older_price, new_price, picture, year_of_use, email, phone, address, time_of_post, about } = product;
    // console.log(product);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Phone" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_name}</h2>
                <p>New Price: {new_price}</p>
                <p>Old Price: {older_price}</p>
                <p>Seller Name: {seller_name}</p>
                <p>Phone: {phone}</p>
                <p>email: {email}</p>
                <p>Year of Use: {year_of_use}</p>
                <p>Address: {address}</p>
                <p>Time of Post: {time_of_post}</p>
                <div className="card-actions">
                    <label htmlFor="product-modal" className="btn btn-primary text-white">Buy Now</label>
                </div>
            </div>
            <ProductModal></ProductModal>
        </div>
    );
};

export default ProductItem;