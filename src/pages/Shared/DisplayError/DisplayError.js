import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <p className="text-red-500">Something Went Wrong!!</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button className='btn btn-warning' onClick={handleLogOut}>Sign Out</button> and Log back in</h4>
        </div>
    );
};

export default DisplayError;