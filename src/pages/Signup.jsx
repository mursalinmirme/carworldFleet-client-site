import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <div className="w-full bg-base-200">
            <div className="w-11/12 mx-auto py-10">
                <div className="w-[600px] mx-auto bg-white px-10 pt-10 pb-16">
                  <h3 className="text-center text-2xl font-semibold">{`Let's create an account`}</h3>
                  <form>
                     <div className="flex flex-col mt-10">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Name</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="text" name="name" id="" />
                     </div>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Image</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="text" name="image" id="" />
                     </div>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Email</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="email" name="email" id="" />
                     </div>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Password</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="email" name="" id="passowrd" />
                     </div>
                     <button className="btn w-full mt-9 text-white bg-[#CC6119] hover:bg-[#d88d5a]" type="submit">Sign Up</button>
                  </form>
                  <p className="mt-5 text-center font-medium">Already Have an Account.<Link to={'/signin'} className='underline text-[#CC6119]'>Login Now</Link></p>
                  <div className="flex items-center justify-center gap-3 mt-5">
                    <span className="border-b-2 w-52"></span>
                    <span className="text-lg font-bold">or</span>
                    <span className="border-b-2 w-52"></span>
                  </div>
                  <button className="btn w-full text-[#CC6119] mt-9 rounded-full border-2 border-[#CC6119] hover:border-white hover:text-white hover:bg-[#f08e4c]" type="submit">Sign Up With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;