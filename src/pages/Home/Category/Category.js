import React from 'react';
import CategoryItem from './CategoryItem';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';



const Category = () => {

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`http://localhost:5500/products`)
            .then(res => res.json())
    });
    // console.log(products);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product => <CategoryItem
                    key={product._id}
                    product={product}
                ></CategoryItem>)
            }
        </div>
    );
};

export default Category;