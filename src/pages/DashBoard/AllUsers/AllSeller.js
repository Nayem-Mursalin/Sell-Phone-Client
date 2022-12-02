import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSeller = () => {
    const [deletinguser, setDeletinguser] = useState(null);
    const closeModal = () => {
        setDeletinguser(null);
    }

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-nayem-mursalin.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })
    // console.log(users);
    const user = users.filter(i => i.role === 'Seller');



    const handleMakeVerify = (id) => {
        fetch(`https://resale-market-server-nayem-mursalin.vercel.app/users/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = users.filter(odr => odr._id !== id);
                    const approving = users.find(odr => odr._id === id);
                    approving.status = 'ok'

                    // const newOrders = [approving, ...remaining];
                    // setOrders(newOrders);
                }
            })
    }

    const handleDeleteuser = user => {
        fetch(`https://resale-market-server-nayem-mursalin.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`user ${user.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verification</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeVerify(user._id)} className='btn btn-xs btn-primary'>Make verify</button>}</td>
                                <td>
                                    <label onClick={() => setDeletinguser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletinguser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletinguser.name}. It cannot be undone.`}
                    successAction={handleDeleteuser}
                    successButtonName="Delete"
                    modalData={deletinguser}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllSeller;