import bn1 from '../assets/bn1.png';
const Banner = () => {
    return (
        <div className="w-11/12 mx-auto pt-5">
           <div className="w-full h-[550px] md:h-[690px] lg:h-[550px] relative">
            <div className='flex justify-end'>
            <img className="lg:w-3/5" src={bn1} alt="" />
            </div>
            <div className="absolute top-0 w-full h-full bg-gradient-to-r md:from-base-200">
              <div className="lg:w-[600px] mt-20 md:ml-10 pt-40 md:pt-80 lg:pt-0">
                 <h3 className="text-2xl text-left lg:text-6xl font-extrabold leading-normal lg:leading-snug">Find your dream car today</h3>
                 <p className='lg:w-4/5 text-xl font-semibold leading-relaxed mt-3'>Begin your journey by purchasing the perfect car and embarking on an adventure.</p>
                 <p className='text-lg mt-3 font-semibold'>Super sell on Thursday (9th November 2023)</p>
                 <div className="text-left">
                 <button className="btn mt-8 rounded-lg bg-[#CC6119] text-xs lg:text-base outline-none text-white border-none hover:bg-[#f77e2c] px-5 capitalize">Join with us</button>
                 </div>
              </div>
            </div>
          </div>
      </div>
    );
};

export default Banner;