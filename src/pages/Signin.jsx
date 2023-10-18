import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="w-full bg-base-200">
            <div className="w-11/12 mx-auto py-10">
                <div className="w-[600px] mx-auto bg-white px-10 pt-10 pb-16">
                    <p className='text-center text-[#CC6119]'>Welcom Back</p>
                  <h3 className="text-center text-2xl font-semibold mt-3">{`Let's Explore Now`}</h3>
                  <form>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Email</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="email" name="email" id="" />
                     </div>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Password</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="password" name="" id="" />
                     </div>
                     <button className="btn w-full mt-9 text-white bg-[#CC6119] hover:bg-[#d88d5a]" type="submit">Sign In</button>
                  </form>
                  <p className='mt-5 font-medium text-center'>{`Don't Have an Account.`}<Link to={'/signup'} className='underline text-[#CC6119]'>Register Now</Link></p>
                  <div className="flex items-center justify-center gap-3 mt-5">
                    <span className="border-b-2 w-52"></span>
                    <span className="text-lg font-bold">or</span>
                    <span className="border-b-2 w-52"></span>
                  </div>
                  <button className="btn w-full text-[#CC6119] mt-9 rounded-full border-2 border-[#CC6119] hover:border-white hover:text-white hover:bg-[#f08e4c]" type="submit">Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signin;