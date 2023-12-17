import React from 'react';
import { Link } from 'react-router-dom';
import stackImage from '../Assets/Image/stack.png';

function SignInComponent() {
    return (
        <div className='w-[444px] h-[576px] 
                p-14 bg-white rounded-[16px] 
                shadow-lg shadow-slate-200
                border border-[#eeeeee]'>
            <div className='flex items-center mb-4'>
                <img className='w-[50.58px] h-[44px] object-cover' src={stackImage}/>
                <h2 className='text-[28px] font-[700] text-[#4E5D78]'>Stack</h2>
            </div>
            <h2 className='text-[20px] font-[600] text-[#404040] mb-8'>Sign In to continue with Stack</h2>
            <div className="w-full">
                <div className="w-full flex flex-col items-start mb-[5px]">
                    <h4 className="font-medium text-[14px] mb-[5px] text-[#344054]">Email </h4>
                    <input className="w-full h-[44px] 
                        text-[16px] mb-6 px-2 font-normal
                        border-solid border-2 border-[#D6BBFB]
                        focus:outline-none focus:ring-2 
                        focus:ring-[#D6BBFB] rounded-[8px]"
                        placeholder='Enter Email'/>
                </div>
                <div className="w-full flex flex-col items-start mb-[5px]">
                    <h4 className="font-medium text-[14px] mb-[5px] text-[#344054]">Password </h4>
                    <input className="w-full h-[44px] 
                        text-[16px] mb-6 px-2 font-normal
                        border-solid border-2 border-[#D6BBFB]
                        focus:outline-none focus:ring-2 
                        focus:ring-[#D6BBFB]  rounded-[8px]"
                        placeholder='Enter Password'/>
                </div>
                <button 
                    className="p-2 mb-6 text-white
                        w-[100%] h-[44px]
                        bg-[#6941C6] rounded-[8px]
                        font-bold text-[16px] 
                        hover:bg-[#6e46cb]">
                        Sign In
                </button> 
                <div className='flex justify-start'>
                    <h2 className='text-[16px] font-medium text-[#B0B7C3] mr-1'>Don’t have an account?</h2>
                    <Link className='text-[16px] font-medium text-[#377DFF] cursor-pointer' to={`/SignUp`}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default SignInComponent;