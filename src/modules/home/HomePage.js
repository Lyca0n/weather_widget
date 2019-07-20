import React from 'react';
import Splash from '../common/Loader';
import WeatherWidget from './WeatherWidget';

const HomePage = () => (
    <div className="page-container">
        <div className="section" >
            <div className="content-container">
                <div className="section__title">
                    A HOME PAGE
                </div>
                <h4>Weather</h4>
                <WeatherWidget />


            </div>
        </div>

    </div>
);

export default HomePage;