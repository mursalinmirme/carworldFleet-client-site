import React from 'react';
import Slider from 'react-slick';

const BrandsAdBanner = ({brand, currentBanners}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="overflow-hidden">
        <Slider {...settings}>
          {
            currentBanners?.map(banner => {
              return <div key={banner._id} className="w-full h-[610px] relative">
              <img className="h-full w-full" src={banner?.bannerImg} alt="" />
              <div className="absolute text-white top-0 w-full h-full bg-gradient-to-r from-[#161618d7] to-[#061518c2]">
                <div className="md:w-[600px] mt-56 md:mt-72 md:ml-20">
                   <h3 className="text-3xl md:text-6xl font-bold leading-normal lg:leading-normal text-center md:text-left">Get {banner.discount}% Discount on {brand}</h3>
                   <div className='text-center lg:text-left'>
                   <button className="btn mt-8 bg-[#CC6119] text-white outline-none border-none hover:bg-[#f77e2c] rounded-full px-20">Buy Now</button>
                   </div>
                </div>
              </div>
            </div>
            })
          }
          
          
        </Slider>
      </div>
    );
};

export default BrandsAdBanner;