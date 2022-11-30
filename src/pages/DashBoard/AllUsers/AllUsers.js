import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5500/users');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
        </div>
    );
};

export default AllUsers;