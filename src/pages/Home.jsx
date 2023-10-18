import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Brands from "../components/Brands";

const Home = () => {
    const allBrands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Brands allBrands={allBrands}></Brands>
        </div>
    );
};

export default Home;