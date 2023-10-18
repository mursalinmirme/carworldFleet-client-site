import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const Signin = () => {
    const { signinByemailandPassword, googleLogin } = useContext(authContext);
    const navigate = useNavigate();
    const handleSigninByEmail = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signinByemailandPassword(email, password)
        .then(() => {
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: false,
                timer: 2000
              })
              form.reset();
              navigate('/')
        })
        .catch(error => {
            if(error.message === 'Firebase: Error (auth/invalid-login-credentials).'){
                return Swal.fire({
                    icon: 'error',
                    title: 'Invalid Login Credintials',
                    text: `Email and password doesn't match`,
                  })
            }
            Swal.fire({
                icon: 'error',
                title: 'Invalid Login Credintials',
                text: error.message,
              })
        })
    }

    const handleSigninWithGoogle = () => {
        googleLogin()
        .then(res => {
           console.log(res);
           Swal.fire({
              position: 'center-center',
              icon: 'success',
              title: 'Sign in successfully',
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
                <div className="w-[600px] mx-auto bg-white px-10 pt-10 pb-16">
                    <p className='text-center text-[#CC6119]'>Welcom Back</p>
                  <h3 className="text-center text-2xl font-semibold mt-3">{`Let's Explore Now`}</h3>
                  <form onSubmit={handleSigninByEmail}>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Email</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="email" name="email" id="email" required />
                     </div>
                     <div className="flex flex-col mt-6">
                        <label className="text-lg mb-2 font-medium text-gray-700" htmlFor="">Password</label>
                        <input className="border bg-base-200 text-lg px-3 py-2.5 outline-none rounded font-medium" type="password" name="password" id="password" required autoComplete='' />
                     </div>
                     <button className="btn w-full mt-9 text-white bg-[#CC6119] hover:bg-[#d88d5a]" type="submit">Sign In</button>
                  </form>
                  <p className='mt-5 font-medium text-center'>{`Don't Have an Account.`}<Link to={'/signup'} className='underline text-[#CC6119]'>Register Now</Link></p>
                  <div className="flex items-center justify-center gap-3 mt-5">
                    <span className="border-b-2 w-52"></span>
                    <span className="text-lg font-bold">or</span>
                    <span className="border-b-2 w-52"></span>
                  </div>
                  <button onClick={handleSigninWithGoogle} className="btn w-full text-[#CC6119] mt-9 rounded-full border-2 border-[#CC6119] hover:border-white hover:text-white hover:bg-[#f08e4c]" type="submit">Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signin;