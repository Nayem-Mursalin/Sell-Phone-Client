import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');

    const { signIn } = useContext(AuthContext);

    const handleLogIn = (data) => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            });
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogIn)}>
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
                    <input className='btn btn-accent w-full mt-4' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <br></br>
                <p>New to Sell Phone? <Link className='text-secondary' to="/signup">Create a new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;