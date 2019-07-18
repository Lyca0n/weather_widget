import React from 'react';
import Splash from '../common/Loader';
import  WeatherWidget  from './WeatherWidget';

const HomePage = () => (
    <div className="page-container">
        <div className="section" >
            <div className="content-container">
                <div className="section__title">
                    A HOME PAGE
                </div>
                <div className="cards__container">
                    <div className="card">
                        <h4>ONE</h4>
                        <WeatherWidget />

                    </div>
                    <div className="card">
                        <h4>TWO</h4>

                    </div>
                    <div className="card">
                        <h4>THREE</h4>
                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default HomePage;