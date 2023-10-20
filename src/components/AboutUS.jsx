import aboutUsPic from '../assets/aboutUsPic.jpg';
import {BsCheck2Circle} from 'react-icons/bs'
const AboutUS = () => {
    return (
        <div className='w-11/12 mx-auto mt-20 lg:mt-40'>
            <div className='flex flex-col-reverse lg:flex-row gap-16 items-center'>
                <div className='w-[95%] lg:w-[50%]'>
                    <img className='w-11/12 rounded-r-full' src={aboutUsPic} alt="" />
                </div>
                <div className='w-full lg:w-[50%]'>
                    <h3 className='text-3xl lg:text-4xl text-center lg:text-left font-extrabold mb-5 lg:mb-8'>About US</h3>
                    <h6 className='text-lg lg:text-2xl leading-normal font-medium w-full lg:w-[70%] mb-5'>Discover Our Journey: Crafting Excellence in Automotive Innovation and Luxury</h6>
                    <p className='leading-relaxed'>At carWorldFleet, we invite you to discover our captivating journey. With an unwavering commitment to excellence, we are at the forefront of automotive innovation, redefining luxury, and placing customers at the heart of everything we do. Join us as we shape the future of driving and personal experiences.</p>
                    <ul className='list-none mt-5 lg:mt-7 font-medium'>
                        <li className='flex items-center gap-2 mt-4'>
                            <BsCheck2Circle className='text-[#CC6119] text-xl'></BsCheck2Circle>
                            <span>Innovative Automotive Solutions</span>
                        </li>
                        <li className='flex items-center gap-2 mt-4'>
                            <BsCheck2Circle className='text-[#CC6119] text-xl'></BsCheck2Circle>
                            <span>Luxury Vehicle Showroom</span>
                        </li>
                        <li className='flex items-center gap-2 mt-4'>
                            <BsCheck2Circle className='text-[#CC6119] text-xl'></BsCheck2Circle>
                            <span>Expert Consultation</span>
                        </li>
                        <li className='flex items-center gap-2 mt-4'>
                            <BsCheck2Circle className='text-[#CC6119] text-xl'></BsCheck2Circle>
                            <span>Customization</span>
                        </li>
                        <li className='flex items-center gap-2 mt-4'>
                            <BsCheck2Circle className='text-[#CC6119] text-xl'></BsCheck2Circle>
                            <span>Maintenance and Servicing</span>
                        </li>
                        <li className='flex items-center gap-2 mt-4'>
                            <BsCheck2Circle className='text-[#CC6119] text-xl'></BsCheck2Circle>
                            <span>Financing Solutions</span>
                        </li>
                        <li className='flex items-center gap-2 mt-4'>
                            <BsCheck2Circle className='text-[#CC6119] text-xl'></BsCheck2Circle>
                            <span>Exceptional Customer Experience</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default AboutUS;