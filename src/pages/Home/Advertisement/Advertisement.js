import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import AdvItem from './AdvItem';

const Advertisement = () => {
    let advProduct = [];
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`https://resale-market-server-nayem-mursalin.vercel.app/products`)
            .then(res => res.json())
    });
    console.log(products);

    products.map(i => {
        i.products.map(p => {
            if (p.advertise === 'true') {
                advProduct = [...advProduct, p];
            }
        })
    })
    console.log(advProduct);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                advProduct.map(product =>
                    <AdvItem
                        key={product._id}
                        product={product}
                    ></AdvItem>)
            }
        </div>
    );
};

export default Advertisement;