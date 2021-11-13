import React from 'react';
import Banner from '../Banner/Banner';
import Eyeglass from '../Eyeglass/Eyeglass';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Reviews></Reviews>
           <Eyeglass></Eyeglass>
        </div>
    );
};

export default Home;