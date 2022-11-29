import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal/ProductModal';

const Products = () => {
    const { products } = useLoaderData();
    const [productDetail, setProductDetail] = useState(null);


    // console.log(products);
    return (
        <div>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductItem
                        key={product._id}
                        product={product}
                        productDetail={productDetail}
                        setProductDetail={setProductDetail}
                    ></ProductItem>)
                }
            </div>
            {
                productDetail &&
                <ProductModal
                    // product={product}
                    productDetail={productDetail}
                    setProductDetail={setProductDetail}
                ></ProductModal>
            }
        </div>
    );
};

export default Products;

