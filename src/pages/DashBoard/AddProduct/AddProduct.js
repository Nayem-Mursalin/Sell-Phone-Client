import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbbkey;
    console.log(imageHostKey);

    const navigate = useNavigate();

    const handleAddProduct = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        email: data.email,
                        image: imgData.data.url,
                    }

                    //save information to database
                    fetch('https://resale-market-server-nayem-mursalin.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/myproducts');
                        })
                }
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='form-control w-full w-max-xs'>
                    <label className='label'><span className='label-text'>Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className='form-control w-full w-max-xs'>
                    <label className='label'><span className='label-text'>Phone No.</span></label>
                    <input type="text" {...register("phone", {
                        required: true
                    })}
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='form-control w-full w-max-xs'>
                    <label className='label'><span className='label-text'>New Price</span></label>
                    <input type="text" {...register("price", {
                        required: true
                    })}
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='form-control w-full w-max-xs'>
                    <label className='label'><span className='label-text'>Old Price</span></label>
                    <input type="text" {...register("old_price", {
                        required: true
                    })}
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='form-control w-full w-max-xs'>
                    <label className='label'> <span className='label-text'>Category</span></label>
                    <select
                        {...register('category')}
                        className="select select-bordered w-full max-w-xs">
                        <option>Android</option>
                        <option>Iphone</option>
                        <option>Feature Phone</option>

                    </select>
                </div>

                <div className='form-control w-full w-max-xs'>
                    <label className='label'> <span className='label-text'>Condition</span></label>
                    <select
                        {...register('condition')}
                        className="select select-bordered w-full max-w-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>

                    </select>
                </div>

                <div className='form-control w-full w-max-xs'>
                    <label className='label'><span className='label-text'>Address</span></label>
                    <input type="text" {...register("address", {
                        required: true
                    })}
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='form-control w-full w-max-xs'>
                    <label className='label'><span className='label-text'>Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;