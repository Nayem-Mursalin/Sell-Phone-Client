import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">404 Not Found</h1>
                    <p className="mb-5">This Page is not found Yet!. We will find it leter. Go back to Home Page.</p>
                    <button className="btn btn-primary"><Link to='/'>Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;