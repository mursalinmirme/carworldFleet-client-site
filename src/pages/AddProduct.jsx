import React from 'react';

const AddProduct = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='border bg-base-200 w-2/3 mx-auto pt-14 pb-20 p-10 mt-7 rounded-lg'>
            <h2 className='text-center font-bold text-2xl text-gray-800'>Add New Product</h2>
            <form>
                <div className='flex gap-7 items-center mt-10'>
                    <div className='flex-1'>
                        <label className='block font-medium' htmlFor="">Image</label>
                        <input className='border w-full px-3 text-lg py-2 outline-none mt-2' type="text" name='image' placeholder='Product image' />
                    </div>
                    <div className='flex-1'>
                        <label className='block font-medium' htmlFor="">Name</label>
                        <input className='border w-full px-3 text-lg py-2 outline-none mt-2' type="text" name='image' placeholder='Product name' />
                    </div>
                </div>
                <div className='flex gap-7 items-center mt-10'>
                    <div className='flex-1'>
                        <label className='block font-medium' htmlFor="">Brand</label>
                        <input className='border w-full px-3 text-lg py-2 outline-none mt-2' type="text" name='image' placeholder='Product brand' />
                    </div>
                    <div className='flex-1'>
                        <label className='block font-medium' htmlFor="">Type</label>
                        <input className='border w-full px-3 text-lg py-2 outline-none mt-2' type="text" name='image' placeholder='Product type' />
                    </div>
                </div>
                <div className='flex gap-7 items-center mt-10'>
                    <div className='flex-1'>
                        <label className='block font-medium' htmlFor="">Price</label>
                        <input className='border w-full px-3 text-lg py-2 outline-none mt-2' type="text" name='image' placeholder='Product price' />
                    </div>
                    <div className='flex-1'>
                        <label className='block font-medium' htmlFor="">Rating</label>
                        <input className='border w-full px-3 text-lg py-2 outline-none mt-2' type="text" name='image' placeholder='Product rating' />
                    </div>
                </div>
                <div className='mt-6'>
                        <label className='block font-medium' htmlFor="">Description</label>
                        <input className='border w-full px-3 text-lg py-2 outline-none mt-2' type="text" name='image' placeholder='Product description' />
                    </div>
                    <button className='btn bg-[#CC6119] text-white hover:bg-[#64391c] w-full mt-8'>Add Product</button>
            </form>
            </div>
        </div>
    );
};

export default AddProduct;