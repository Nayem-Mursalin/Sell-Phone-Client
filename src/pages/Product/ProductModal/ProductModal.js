import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const ProductModal = () => {
    const { user } = useContext(AuthContext);

    const handleOrder = () => {

    }
    return (
        <>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{treatmentName}</h3> */}
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 mt-6'>
                        {/* <input type="text" value={date} className="input w-full input-bordered" /> */}
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className="w-full max-w-xs btn-accent" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductModal;