import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Category></Category>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;