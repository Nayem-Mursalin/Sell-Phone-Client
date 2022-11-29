import React from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    const cardData = [
        {
            id: 1,
            name: 'IPhone',
            description: 'We sell all kind of 2nd hand Iphone',
            // icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Android',
            description: 'We sell all kind of 2nd hand Android Phone',
            // icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'ButtonPhone',
            description: 'We sell all kind of 2nd hand ButtonPhone',
            // icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(category => <CategoryItem
                    key={category.id}
                    category={category}
                ></CategoryItem>)
            }
        </div>
    );
};

export default Category;