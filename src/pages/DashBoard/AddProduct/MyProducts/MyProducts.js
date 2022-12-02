import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `https://resale-market-server-nayem-mursalin.vercel.app/products?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const myProduct = products.map((i) => i.products.filter(x => x.email === user.email));

    return (
        <div>
            <h3 className="text-3xl mb-5">My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Name</td>
                            <td>New Price</td>
                            <td>Older Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProduct &&
                            myProduct?.map((product, index) => <tr key={product[0].id}>
                                <th>{index + 1}</th>
                                <th>{product[0].product_name}</th>
                                <th>{product[0].new_price}</th>
                                <th>{product[0].older_price}</th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;