import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://resale-market-server-nayem-mursalin.vercel.app/orders?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user.email],
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

    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Address</td>
                            <td>Payment</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <th>{order.name}</th>
                                <th>{order.price}</th>
                                <th>{order.address}</th>
                                <th>
                                    {
                                        !order.paid &&
                                        <button className='btn btn-primary btn-sm'>
                                            <Link to={`/dashboard/payment/${order._id}`}>Pay</Link>
                                        </button>
                                    }
                                    {
                                        order.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;