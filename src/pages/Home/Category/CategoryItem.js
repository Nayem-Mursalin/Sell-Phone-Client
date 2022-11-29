import React from 'react';

const CategoryItem = ({ category }) => {
    const { name, description, bgClass } = category;
    return (
        <div className={`p-6 card md:card-side shadow-xl text-white ${bgClass}`}>
            <figure><img src='' alt="Phone" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CategoryItem;