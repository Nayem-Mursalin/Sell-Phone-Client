import React from 'react';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal/ProductModal';

const ProductItem = ({ product, productDetail, setProductDetail }) => {
    const { product_name, seller_name, seller_ver, older_price, new_price, picture, year_of_use, email, phone, address, time_of_post, about } = product;
    // console.log(productDetail);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Phone" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_name}</h2>
                <p>New Price: {new_price}</p>
                <p>Old Price: {older_price}</p>
                <p>Seller Name: {seller_name} - <span className='text-blue-600'>{seller_ver === 'true' ? 'Vefiried' : 'Not varified'}</span></p>
                <p>Phone: {phone}</p>
                <p>email: {email}</p>
                <p>Year of Use: {year_of_use}</p>
                <p>Address: {address}</p>
                <p>Time of Post: {time_of_post}</p>
                <div className="card-actions rounded">
                    <label
                        htmlFor="product-modal"
                        className="btn btn-primary text-white"
                        onClick={() => { setProductDetail(product) }}
                    >Buy Now</label>
                </div>
                <div><btn className='btn btn-warning btn-sm'>Report to Admin</btn></div>
            </div>

        </div>
    );
};

export default ProductItem;