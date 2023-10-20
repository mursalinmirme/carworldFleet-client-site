import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "./Testimonials.css";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      "https://car-world-fleet-server-site-705dg2ceg-mursalinmirme.vercel.app/testimonials"
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-11/12 mx-auto mt-24">
      <h2 className="text-center text-3xl font-bold">Testimonials</h2>
      <p className="text-center mt-5 font-medium text-gray-500 text-lg">
        Discover the voices of those <br /> who have experienced excellence with
        us.
      </p>
      <div className="mt-14">
        <Slider {...settings}>
          {/* slider 1 */}
          {reviews.map((review) => {
            return (
              <div key={review?._id}>
                <div className="ml-5 border">
                  <img
                    className="rounded-full w-28 mt-4 h-28 mx-auto"
                    src={review?.userImg}
                    alt=""
                  />
                  <div className="flex justify-center mt-3">
                    <ReactStars
                      count={5}
                      edit={false}
                      half={true}
                      value={parseInt(5)}
                      size={30}
                      activeColor="#FFD700"
                    ></ReactStars>
                  </div>
                  <div>
                    <p className="text-center px-8 text-xl mt-5 font-medium text-gray-500 leading-relaxed grow">
                      {review?.reviewTxt.length > 160
                        ? review?.reviewTxt.slice(0, 160) + "..."
                        : review?.reviewTxt}
                    </p>
                  </div>
                  <div className="text-center mt-7 mb-10">
                    <h3 className="text-2xl font-bold text-gray-600">
                      {review?.userName}
                    </h3>
                    <p className="text-[#CC6119] mt-2 font-semibold">
                      Happy Customer
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
