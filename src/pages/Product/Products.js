import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
import ProductItem from './ProductItem';

const Products = () => {
    const { products } = useLoaderData();
    // const { data: products = [], refetch, isLoading } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: () => fetch(`http://localhost:5500/products/${_id}`)
    //         .then(res => res.json())
    // });
    console.log(products);
    return (
        <div>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductItem
                        key={product._id}
                        product={product}
                    ></ProductItem>)
                }
            </div>
        </div>
    );
};

export default Products;

