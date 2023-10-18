import React from 'react';

const AddBrands = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='border bg-base-200 w-[550px] mx-auto pt-14 pb-20 p-10 mt-7 rounded-lg'>
            <h2 className='text-center font-bold text-2xl text-gray-800'>Add a New Brand</h2>
            <form>

                    <div className='mt-10'>
                        <label className='block font-medium' htmlFor="">Brand Name</label>
                        <input className='border w-full px-3 text-lg py-3 outline-none mt-2' type="text" name='image' placeholder='Brand Name' />
                    </div>
                    <div className='mt-10'>
                        <label className='block font-medium' htmlFor="">Brand Image</label>
                        <input className='border w-full px-3 text-lg py-3 outline-none mt-2' type="text" name='image' placeholder='Brand Image' />
                    </div>
                    <button className='btn mt-12 bg-[#CC6119] text-white hover:bg-[#64391c] w-full h-[52px]'>Add Brand</button>
            </form>
            </div>
        </div>
    );
};

export default AddBrands;