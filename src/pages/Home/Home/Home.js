import React from 'react';
import Banner from '../Banner/Banner';
import Eyeglass from '../Eyeglass/Eyeglass';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Eyeglass></Eyeglass>
        </div>
    );
};

export default Home;