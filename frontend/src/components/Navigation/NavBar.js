import React, { useState, useEffect, Nav } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { getAllUsersThunk } from "../../store/AllUsers";

import ModelS from './model-pics/ModelS.avif';
import Model3 from './model-pics/Model3.avif';
import ModelX from './model-pics/ModelX.avif';
import ModelY from './model-pics/ModelY.avif';

import SolarPanels from './energy-pics/SolarPanels.avif';
import SolarRoof from './energy-pics/SolarRoof.avif';
import Powerwall from './energy-pics/Powerwall.avif';
import Megapack from './energy-pics/Megapack.avif';

import Charging from './charging-pics/Charging.avif';
import HomeCharging from './charging-pics/HomeCharging.avif';
import Supercharging from './charging-pics/Supercharging.avif';

import Charging2 from './shop-pics/Charging2.avif';
import VehicleAccessories from './shop-pics/VehicleAccessories.avif';
import Apparel from './shop-pics/Apparel.avif';
import Lifestyle from './shop-pics/Lifestyle.avif';

import "./NavBar.css"

export default function NavBar() {
    return (
        <nav id="nav">
            <div id="logo">
                <NavLink exact to='/'>Thesla</NavLink>
            </div>
            <div id="middle-bar">
                <div className="drop">Vehicles</div>
                <div className="models-drop">
                    <NavLink exact to='/order/modelS'><img src={ModelS} alt='Model S' /></NavLink>
                    <div>
                        <NavLink className='learn'>Learn</NavLink>
                        <NavLink className='order'>Order</NavLink>
                    </div>
                </div>
                <div className="models-drop">
                    <NavLink exact to='/order/model3'><img src={Model3} alt='Model 3' /></NavLink>
                    <div>
                        <NavLink exact to='/learn/model3' className='learn'>Learn</NavLink>
                        <NavLink exact to='/order/model3' className='order'>Order</NavLink>
                    </div>
                </div>
                <div className="models-drop">
                    <NavLink exact to='/order/modelX'><img src={ModelX} alt='Model X' /></NavLink>
                    <div>
                        <NavLink exact to='/learn/modelX' className='learn'>Learn</NavLink>
                        <NavLink exact to='/order/modelX' className='order'>Order</NavLink>
                    </div>
                </div>
                <div className="models-drop">
                    <NavLink exact to='/order/modelY'><img src={ModelY} alt='Model Y' /></NavLink>
                    <div>
                        <NavLink exact to='/learn/modelY' className='learn'>Learn</NavLink>
                        <NavLink exact to='/order/modelY' className='order'>Order</NavLink>
                    </div>
                </div>
                <div>
                    <div className="drop">Energy</div>
                    <div className="energy-drop">
                        <NavLink exact to='/order/solarPanels'><img src={SolarPanels} alt='Solar Panels'/></NavLink>
                        <div>
                            <NavLink exact to='/learn/solarPanels'>Learn</NavLink>
                            <NavLink exact to='/order/solarPanels'>Order</NavLink>
                        </div>
                    </div>
                    <div className="energy-drop">
                        <NavLink exact to='/order/solarRoof'><img src={SolarRoof} alt='Solar Roof'/></NavLink>
                        <div>
                            <NavLink exact to='/learn/solarRoof'>Learn</NavLink>
                            <NavLink exact to='/order/solarRoof'>Order</NavLink>
                        </div>
                    </div>
                    <div className="energy-drop">
                        <NavLink exact to='/order/powerwall'><img src={Powerwall} alt='Powerwall'/></NavLink>
                        <div>
                            <NavLink exact to='/learn/powerwall'>Learn</NavLink>
                            <NavLink exact to='/order/powerwall'>Order</NavLink>
                        </div>
                    </div>
                    <div className="energy-drop">
                        <NavLink exact to='/order/megapack'><img src={Megapack} alt='Megapack'/></NavLink>
                        <div>
                            <NavLink exact to='/learn/megapack'>Learn</NavLink>
                            <NavLink exact to='/order/megapack'>Order</NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="drop">Charging</div>
                    <div>
                        <NavLink exact to='/order/charging'><img src={Charging} alt='Charging' /></NavLink>
                        <div>
                            <NavLink exact to='/learn/charging'>Learn</NavLink>
                            <NavLink exact to='/order/charging'>Order</NavLink>
                        </div>
                    </div>
                    <div>
                        <NavLink exact to='/order/homeCharging'><img src={HomeCharging} alt='Home Charging' /></NavLink>
                        <div>
                            <NavLink exact to='/learn/homeCharging'>Learn</NavLink>
                            <NavLink exact to='/order/homeCharging'>Order</NavLink>
                        </div>
                    </div>
                    <div>
                        <NavLink exact to='/order/supercharging'><img src={Supercharging} alt='Supercharging' /></NavLink>
                        <div>
                            <NavLink exact to='/learn/supercharging'>Learn</NavLink>
                            <NavLink exact to='/order/supercharging'>Order</NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="drop">Discover</div>
                    <div className="discover-drop">
                        <div>Resources</div>
                        <div>
                            <NavLink exact to='/drive'>Demo Drive</NavLink>
                            <NavLink exact to='/insurance'>Insurance</NavLink>
                            <NavLink exact to='/guides'>Video Guides</NavLink>
                            <NavLink exact to='/stories'>Customer Stories</NavLink>
                            <NavLink exact to='/events'>Events</NavLink>
                        </div>
                        <div>Location Services</div>
                        <div>
                            <NavLink exact to='/find'>Find Us</NavLink>
                            <NavLink exact to='/planner'>Trip Planner</NavLink>
                            <NavLink exact to='/collision'>Find a Collision Center</NavLink>
                            <NavLink exact to='/installer'>Find a Certified Installer</NavLink>
                        </div>
                        <div>Company</div>
                        <div>
                            <NavLink exact to='/about'>About</NavLink>
                            <NavLink exact to='/careers'>Careers</NavLink>
                            <NavLink exact to='/investor'>Investor Relations</NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="drop">Shop</div>
                    <div className="shop-drop">
                        <NavLink exact to='/order/charging2'><img src={Charging2} alt='Charging'/></NavLink>
                        <NavLink exact to='/order/charging2'>Charging</NavLink>
                    </div>
                    <div className="shop-drop">
                        <NavLink exact to='/order/accessories'><img src={VehicleAccessories} alt='Vehicle Accessories'/></NavLink>
                        <NavLink exact to='/order/accessories'>Vehicle Accessories</NavLink>
                    </div>
                    <div className="shop-drop">
                        <NavLink exact to='/order/apparel'><img src={Apparel} alt='Apparel'/></NavLink>
                        <NavLink exact to='/order/apparel'>Apparel</NavLink>
                    </div>
                    <div className="shop-drop">
                        <NavLink exact to='/order/lifestyle'><img src={Lifestyle} alt='Lifestyle'/></NavLink>
                        <NavLink exact to='/order/lifestyle'>Lifestyle</NavLink>
                    </div>
                </div>
            </div>
            <div id="left-bar">
                <NavLink to='/support'><i class="fa-thin fa-circle-question"></i></NavLink>
                <NavLink to='/singin'><i class="fa-thin fa-circle-user"></i></NavLink>
            </div>
        </nav>
    )
}
