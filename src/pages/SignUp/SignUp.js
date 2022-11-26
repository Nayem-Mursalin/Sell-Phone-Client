import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSignIn = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message)
            });
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className='form-control w-full w-max-xs'>
                        <label className='label'><span className='label-text'>Name</span></label>
                        <input type="name"
                            {...register("name", { required: "Name is Required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className='form-control w-full w-max-xs'>
                        <label className='label'><span className='label-text'>Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email is Required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className='form-control w-full w-max-xs'>
                        <label className='label'> <span className='label-text'>Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Psssword is Required",
                                minLength: { value: 6, message: "Password must be 6 character or longer" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className='form-control w-full w-max-xs'>
                        <label className='label'> <span className='label-text'>Select a User Type</span></label>
                        <select {...register("type", {
                            required: "User Type is Required"
                        })}
                            className="input input-bordered w-full max-w-xs">
                            <option value="buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="SignUp" type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <br></br>
                <p>Already have an Account? <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;