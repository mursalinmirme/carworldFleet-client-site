
import { Link } from 'react-router-dom';
const Brands = ({allBrands}) => {
    // console.log(allBrands);
    return (
        <div className="w-11/12 mx-auto mt-14 lg:mt-20 mb-20">
            <h3 className="text-2xl md:text-3xl text-center font-semibold">Popular Brands</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 mt-14 lg:mt-20'>
                {
                    allBrands?.map(brand => {
                        return <Link to={`/brandsCar/${brand?.brandName}`} key={brand._id}><div className='text-center border p-3'>
                        <img className='w-32 h-32 mx-auto' src={brand?.brandImg} alt="" />
                        <h3 className='text-2xl font-semibold mt-4'>{brand?.brandName}</h3>
                        </div></Link>
                    })
                }
                
                
            </div>
        </div>
    );
};

export default Brands;