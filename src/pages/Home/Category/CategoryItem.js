import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ product }) => {
    const { _id, category, categoryImg } = product;
    return (
        <div className={`p-6 card md:card-side shadow-xl`}>
            <figure><img src={categoryImg} alt="Phone" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <button className='btn'><Link to={`/category/${_id}`}>View All</Link></button>
            </div>
        </div>
    );
};

export default CategoryItem;