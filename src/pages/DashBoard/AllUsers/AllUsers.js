import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const AllUsers = () => {
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

    const user = users.filter(i => i.role === 'buyer');

    const handleMakeAdmin = (id) => {
        fetch(`https://resale-market-server-nayem-mursalin.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Succesful');
                    refetch();
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
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
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

export default AllUsers;