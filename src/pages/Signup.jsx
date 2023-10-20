import { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { authContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";


const Signup = () => {
   const { SignupWithEmailandPassword, updateUserProfile, googleLogin } = useContext(authContext);
   const navigate = useNavigate();
   const handleSignupWithEmail = (e) => {
      e.preventDefault();
      const from = e.target;
      const name = from.name.value;
      const image = from.image.value;
      const email = from.email.value;
      const password = from.password.value;
      if(!/^.{6,}$/.test(password)){
         return Swal.fire({
            icon: 'error',
            text: 'Password should be at least 6 charecter.',
          })
      }else if(!/.*[A-Z].*/.test(password)){
         return Swal.fire({
            icon: 'error',
            text: 'Password should be at least a Capital letter',
          })
      }else if(!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-].*/.test(password)){
         return Swal.fire({
            icon: 'error',
            text: 'Password should be at least a speicial charecter.',
          })
      }
      SignupWithEmailandPassword(email, password)
      .then(() => {
         updateUserProfile({displayName: name, photoURL: image})
         Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Registration Successfully',
            showConfirmButton: false,
            timer: 2000
          })
          from.reset();
          navigate('/');
      })
      .catch(error => {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          })
      })
   }

   const handleSignupWithGoogle = () => {
      googleLogin()
      .then(res => {
         console.log(res);
         Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Registration Successfully',
            showConfirmButton: false,
            timer: 2000
          })
          navigate('/');
      })
      .catch(error => {
         console.log(error.message);
         Swal.fire({
            position: 'center-center',
            icon: 'error',
            title: error.message,
            showConfirmButton: false,
            timer: 2000
          })
      })
   }

    return (
        <div className="w-full bg-base-200">
            <div className="w-11/12 mx-auto py-10">
                <div className="lg:w-[600px] mx-auto bg-white px-10 pt-10 pb-16">
                  <h3 className="text-center text-2xl font-semibold">{`Let's create an account`}</h3>
                  <form onSubmit={handleSignupWithEmail}>
                     <div className="flex flex-col mt-10">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Name</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="text" name="name" id="name" />
                     </div>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Image</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="text" name="image" id="image" />
                     </div>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Email</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="email" name="email" id="email" />
                     </div>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Password</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="password" name="password" id="passowrd" autoComplete="" />
                     </div>
                     <button className="btn w-full mt-9 text-white bg-[#CC6119] hover:bg-[#d88d5a]" type="submit">Sign Up</button>
                  </form>
                  <p className="mt-5 text-center font-medium">Already Have an Account.<Link to={'/signin'} className='underline text-[#CC6119]'>Login Now</Link></p>
                  <div className="flex items-center justify-center gap-3 mt-5">
                    <span className="border-b-2 w-52"></span>
                    <span className="text-lg font-bold">or</span>
                    <span className="border-b-2 w-52"></span>
                  </div>
                  <button onClick={handleSignupWithGoogle} className="btn w-full text-[#CC6119] mt-9 rounded-full border-2 border-[#CC6119] hover:border-white hover:text-white hover:bg-[#f08e4c]" type="submit">Sign Up With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;