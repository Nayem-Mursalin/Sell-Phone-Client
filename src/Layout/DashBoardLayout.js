import React, { useContext } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const alluser = useLoaderData();
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    // console.log(alluser);
    const currentUser = alluser.find(i => i.email === user.email);
    // console.log(currentUser);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All User</Link></li>
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                            </>
                        }
                        {
                            !isAdmin && currentUser.role === 'Seller' && <>

                                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myproduct'>My Product</Link></li>
                            </>
                        }
                        {
                            currentUser.role === 'buyer' && <>
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashBoardLayout;