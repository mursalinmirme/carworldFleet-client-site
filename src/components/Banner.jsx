import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeBanner from '../assets/homeBanner.jpg';
import homeBannerTwo from '../assets/homeBannerTwo.jpg';
import homeBannerThree from '../assets/homeBannerThree.jpg';
const Banner = () => {
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
        <div className="w-11/12 mx-auto overflow-hidden">
        <Slider {...settings}>
          <div className="w-full h-[610px] relative">
            <img className="h-full w-full" src={homeBanner} alt="" />
            <div className="absolute text-white top-0 w-full h-full bg-gradient-to-r from-[#161618d7] to-[#061518c2]">
              <div className="lg:w-[600px] mt-72 lg:ml-20">
                 <h3 className="text-3xl text-center lg:text-left lg:text-6xl font-bold leading-normal lg:leading-normal">Discover the World of Wheels</h3>
                 <div className="text-center lg:text-left">
                 <button className="btn mt-8 rounded-full bg-[#CC6119] text-white text-xs lg:text-base outline-none border-none hover:bg-[#f77e2c] lg:rounded-none">Find Your Dream Car</button>
                 </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[610px] relative">
            <img className="h-full w-full" src={homeBannerTwo} alt="" />
            <div className="absolute text-white top-0 w-full h-full bg-gradient-to-r from-[#161618d7] to-[#061518c2]">
              <div className="lg:w-[600px] mt-72 lg:ml-20">
                 <h3 className="text-3xl lg:text-6xl text-center lg:text-left font-bold leading-normal lg:leading-normal">Your Roadmap to Car Excellence</h3>
                 <div className="text-center lg:text-left">
                 <button className="btn mt-8 rounded-full bg-[#CC6119] text-white text-xs lg:text-base outline-none border-none hover:bg-[#f77e2c] lg:rounded-none">Find Your Dream Car</button>
                 </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[610px] relative">
            <img className="h-full w-full" src={homeBannerThree} alt="" />
            <div className="absolute text-white top-0 w-full h-full bg-gradient-to-r from-[#16161877] to-[#061518c2]">
              <div className="lg:w-[600px] mt-72 lg:ml-20">
                 <h3 className="text-3xl lg:text-6xl font-bold text-center lg:text-left leading-normal lg:leading-normal">Driving Innovation and Excellence</h3>
                 <div className="text-center lg:text-left">
                 <button className="btn mt-8 rounded-full bg-[#CC6119] text-white text-xs lg:text-base outline-none border-none hover:bg-[#f77e2c] lg:rounded-none">Find Your Dream Car</button>
                 </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
};

export default Banner;