import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import loginUtil from '../../utils/loginUtil'

function Login({ setRegStatus }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    return (
        <form className='flex justify-center items-center w-[50vw]'
            onSubmit={handleSubmit((data) => {
                loginUtil({ email: data.email, password: data.password })
            })}>
            <div>
                <h1 className='font-extrabold text-6xl text-center'>Hello Again!</h1>
                <p className='text-center mt-3'>Imagine. Write. Collaborate.</p>
                <p className='text-center'>Welcome to a community that loves litreature!</p>
                <div className=' flex flex-col justify-center items-center mt-5'>
                    {errors.mail && <p className='text-sm m-0.5 text-red-500'>{errors.mail.message}</p>}
                    <input
                        type="text"
                        className={`w-[400px] bg-gray-300 py-2 px-3.5 rounded m-1.5 placeholder-slate-800 text-sm ${errors.email ? 'bg-red-100 border border-red-700' : ''}`}
                        placeholder='Enter your mail'
                        {...register("email", {
                            required: "Please enter the email",
                            minLength: { value: 3, message: "Name should be of minimum 3 characters." },
                            maxLength: { value: 30, message: "Name should be not more than 30 characters long" }
                        })} />
                    {errors.password && <p className='text-sm m-0.5 text-red-500'>{errors.password.message}</p>}
                    <input
                        type="password"
                        className={`w-[400px] bg-gray-300 py-2 px-3.5 rounded m-1.5 placeholder-slate-800 text-sm ${errors.password ? 'bg-red-100 border border-red-700' : ''}`}
                        placeholder='Enter your password'
                        {...register("password", {
                            required: "Please enter the password",
                            minLength: {
                                value: 10,
                                message: "The password should be at least 10 characters long",
                            }
                        })} />
                    <button className='w-[400px] bg-[#97D4A6] py-2 px-3.5 rounded m-1.5 text-sm' type='submit'>Let me in!</button>
                </div>

                <p className='text-center text-sm m-3'>or</p>
                <p className='text-center text-sm m-3'>Don't have an account? <span className='text-[#3F5F4F] cursor-pointer underline' onClick={() => setRegStatus(false)}>Register here</span></p>
            </div>
        </form>
    )
}

export default Login
