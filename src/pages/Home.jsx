import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import { useState } from "react";
import AboutUS from "../components/AboutUS";
import Testimonials from "../components/Testimonials";

const Home = () => {
    const allBrands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Brands allBrands={allBrands}></Brands>
            <AboutUS></AboutUS>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;