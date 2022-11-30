import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const ProductModal = ({ productDetail, setProductDetail }) => {
    const { user } = useContext(AuthContext);
    const { product_name, seller_name, older_price, new_price, picture, year_of_use, email, phone, address, time_of_post, about } = productDetail;
    // console.log(productDetail);
    // console.log(product_name);
    const handleOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const address = form.address.value;
        const phone = form.phone.value;
        // console.log(product_name, phone);
        toast(`${product_name} is Booked`);

        const order = {
            name: product_name,
            email,
            address,
            phone,
            price: new_price,
            picture,
        }
        console.log(order);

        fetch('http://localhost:5500/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    setProductDetail(null);
                    toast.success('Order Confirmed');
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 mt-6'>
                        {/* <input type="text" value={date} className="input w-full input-bordered" /> */}
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={new_price} disabled placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="address" type="text" placeholder="Your Address" className="input w-full input-bordered" />
                        <br />
                        <input className="w-full h-10 rounded-10 max-w-xs btn-accent" type="submit" value="Confirm" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;