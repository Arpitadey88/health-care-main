import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import LogoArea from '../LogoArea/LogoArea';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <LogoArea></LogoArea>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;