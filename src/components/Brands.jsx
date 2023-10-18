
import bmwLogo from '../assets/bmwLogo.png';
import fordLogo from '../assets/fordLogo.png';
import hondaLogo from '../assets/hondaLogo.png';
import toyotaLogo from '../assets/toyotaLogo.png';
import mercedesLogo from '../assets/mercedesLogo.png';
import teslaLogo from '../assets/teslaLogo.png';
import { Link } from 'react-router-dom';
const Brands = () => {
    return (
        <div className="w-11/12 mx-auto mt-20 mb-20">
            <h3 className="text-3xl text-center font-semibold text-gray-700">Popular Brands</h3>
            <div className='grid grid-cols-6 gap-10 mt-20'>
                <Link><div className='text-center border p-3'>
                    <img className='w-32 h-32 mx-auto' src={bmwLogo} alt="" />
                    <h3 className='text-2xl font-semibold mt-4 text-gray-900'>BMW</h3>
                </div></Link>
                <Link><div className='text-center border p-3'>
                    <img className='w-32 h-32 mx-auto' src={fordLogo} alt="" />
                    <h3 className='text-2xl font-semibold mt-4 text-gray-900'>BMW</h3>
                </div></Link>
                <Link><div className='text-center border p-3'>
                    <img className='w-32 h-32 mx-auto' src={hondaLogo} alt="" />
                    <h3 className='text-2xl font-semibold mt-4 text-gray-900'>BMW</h3>
                </div></Link>
                <Link><div className='text-center border p-3'>
                    <img className='w-32 h-32 mx-auto' src={toyotaLogo} alt="" />
                    <h3 className='text-2xl font-semibold mt-4 text-gray-900'>BMW</h3>
                </div></Link>
                <Link><div className='text-center border p-3'>
                    <img className='w-32 h-32 mx-auto' src={mercedesLogo} alt="" />
                    <h3 className='text-2xl font-semibold mt-4 text-gray-900'>BMW</h3>
                </div></Link>
                <Link><div className='text-center border p-3'>
                    <img className='w-32 h-32 mx-auto' src={teslaLogo} alt="" />
                    <h3 className='text-2xl font-semibold mt-4 text-gray-900'>BMW</h3>
                </div></Link>
            </div>
        </div>
    );
};

export default Brands;