import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandViewCar from "../components/BrandViewCar";
import BrandsAdBanner from "../components/BrandsAdBanner";

const BrandView = () => {
  const getbrandsViewItems = useLoaderData();
  const [brandsViewItems, setbrandsViewItems] = useState(getbrandsViewItems);
  const { brand } = useParams();
  // load brands banner
  const [currentBanners, setCurrentBanners] = useState([]);
  useEffect(() => {
    fetch(
      `https://car-world-fleet-server-site-705dg2ceg-mursalinmirme.vercel.app/banners/${brand}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentBanners(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto min-h-[300px]">
      <BrandsAdBanner
        currentBanners={currentBanners}
        brand={brand}
      ></BrandsAdBanner>

      <div className="mt-20">
        <h3 className="text-center text-2xl font-bold underline">{brand}</h3>
        <p className="text-center text-md mt-2 font-medium text-gray-600">
          Our Popular {brand} collection
        </p>
      </div>
      <div>
        {brandsViewItems?.length < 1 ? (
          <div className="flex justify-center items-center min-h-[300px] text-xl font-medium text-gray-600">
            <h2>This brand has no product in stock.</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-5">
            {brandsViewItems?.map((brandItem) => (
              <BrandViewCar
                key={brandItem?._id}
                brandItem={brandItem}
              ></BrandViewCar>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandView;
