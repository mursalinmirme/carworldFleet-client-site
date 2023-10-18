
import { Link } from 'react-router-dom';
const Brands = ({allBrands}) => {
    console.log(allBrands);
    return (
        <div className="w-11/12 mx-auto mt-20 mb-20">
            <h3 className="text-3xl text-center font-semibold text-gray-700">Popular Brands</h3>
            <div className='grid grid-cols-6 gap-10 mt-20'>
                {
                    allBrands?.map(brand => {
                        return <Link to={`/brandsCar/${brand?.brandName}`} key={brand._id}><div className='text-center border p-3'>
                        <img className='w-32 h-32 mx-auto' src={brand?.brandImg} alt="" />
                        <h3 className='text-2xl font-semibold mt-4 text-gray-900'>{brand?.brandName}</h3>
                        </div></Link>
                    })
                }
                
                
            </div>
        </div>
    );
};

export default Brands;