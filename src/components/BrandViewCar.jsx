import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const BrandViewCar = ({brandItem}) => {
    const {_id, image, name, brand, type, price, rating, description} = brandItem;
    return (
        <div className='border rounded-md'>
            <div className='p-10'>
               <img className='h-[217px]' src={image} alt="" />
            </div>
            <div className='mx-5 border-t-2'>
                <h3 className='text-2xl font-semibold mt-5'>{name}</h3>
                <h6 className='font-semibold my-2 text-lg'>Brand: <span className='font-medium'>{brand}</span></h6>
                <h6 className='font-semibold my-2 text-lg' >Type: <span className='font-medium'>{type}</span></h6>
                <h5 className='font-semibold mt-2 text-lg'>Price: <span className='font-medium'>{price} ৳</span></h5>
                <ReactStars count={5} edit={false} half={true} value={parseInt(rating)} size={35} activeColor="#CC6119"></ReactStars>
                <div className='flex justify-between mt-4 mb-8'>
                    <Link to={`/cars/${_id}`}><button className='btn text-white rounded-md bg-[#CC6119]'>Update</button></Link>
                    <Link to={`/brandsCar/${brand}/${_id}`}><button className='btn border-2 border-[#CC6119] rounded-md text-[#CC6119] capitalize'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandViewCar;