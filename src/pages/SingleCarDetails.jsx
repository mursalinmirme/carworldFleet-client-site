import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { authContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const SingleCarDetails = () => {
    const {user} = useContext(authContext);
    // console.log(user?.uid);
    const getSingleCar = useLoaderData();
    const {_id, name, image, brand, type, price, rating, description} = getSingleCar;
    // console.log(getSingleCar);
    const params = useParams();
    // console.log(params);

    const handleAddToCart = (getAddCartItem) => {
        const userId = user?.uid;
        const newAddToCartItem = {...getAddCartItem, userId}
        console.log(newAddToCartItem);
        fetch('http://localhost:4100/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newAddToCartItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Cart added successfully',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
            console.log("sarver add cart response",data);
        })
    }

    return (
        <div className='w-11/12 mx-auto'>
            <img className='mx-auto w-1/2 mt-20' src={image} alt="" />
            <h3 className='text-3xl font-semibold'>{name}</h3>
            <h4 className='font-semibold mt-2.5 text-gray-700'>Brand: {brand}</h4>
            <h4 className='font-semibold mt-2.5 text-gray-700'>Type: {type}</h4>
            <h4 className='font-semibold mt-2.5 text-gray-700'>Price: {price} ৳</h4>
            <div className='flex items-center'>
            <ReactStars count={5} edit={false} half={true} value={parseInt(rating)} size={35} activeColor="#CC6119"></ReactStars>
            <span>(Rating: {rating})</span>
            </div>
            <p className='font-semibold mt-2.5 text-gray-700'>Description: <span className='font-medium'>{description}</span></p>
            <button onClick={() => handleAddToCart(getSingleCar)} className='btn mt-5 bg-[#CC6119] text-white'>Add to Cart</button>
        </div>
    );
};

export default SingleCarDetails;