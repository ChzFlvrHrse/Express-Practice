import React, { useState, useEffect } from "react";
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
    const [scrollTop, setScrollTop] = useState(true);

    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav id={scrollTop ? 'nav' : 'nav-not-top'}>
                <div id="logo">
                    <NavLink exact to='/'>T E S L A</NavLink>
                </div>
                <div id="middle-bar">
                    <div className="drop" id="drop-models">Vehicles</div>
                    {/* <div className="models-drop">
                    <div className="models">
                        <NavLink to='/order/modelS'><img src={ModelS} alt='Model S' /></NavLink>
                        <div>
                            <NavLink className='learn'>Learn</NavLink>
                            <NavLink className='order'>Order</NavLink>
                        </div>
                    </div>
                    <div className="models">
                        <NavLink to='/order/model3'><img src={Model3} alt='Model 3' /></NavLink>
                        <div>
                            <NavLink to='/learn/model3' className='learn'>Learn</NavLink>
                            <NavLink to='/order/model3' className='order'>Order</NavLink>
                        </div>
                    </div>
                    <div className="models">
                        <NavLink to='/order/modelX'><img src={ModelX} alt='Model X' /></NavLink>
                        <div>
                            <NavLink to='/learn/modelX' className='learn'>Learn</NavLink>
                            <NavLink to='/order/modelX' className='order'>Order</NavLink>
                        </div>
                    </div>
                    <div className="models">
                        <NavLink to='/order/modelY'><img src={ModelY} alt='Model Y' /></NavLink>
                        <div>
                            <NavLink to='/learn/modelY' className='learn'>Learn</NavLink>
                            <NavLink to='/order/modelY' className='order'>Order</NavLink>
                        </div>
                    </div>
                </div> */}

                    <div>
                        <div className="drop" id="drop-energy">Energy</div>
                        {/* <div className="energy-drop">
                            <div className="energy">
                                <NavLink to='/order/solarPanels'><img src={SolarPanels} alt='Solar Panels' /></NavLink>
                                <div>
                                    <NavLink to='/learn/solarPanels'>Learn</NavLink>
                                    <NavLink to='/order/solarPanels'>Order</NavLink>
                                </div>
                            </div>
                            <div className="energy">
                                <NavLink to='/order/solarRoof'><img src={SolarRoof} alt='Solar Roof' /></NavLink>
                                <div>
                                    <NavLink to='/learn/solarRoof'>Learn</NavLink>
                                    <NavLink to='/order/solarRoof'>Order</NavLink>
                                </div>
                            </div>
                            <div className="energy">
                                <NavLink to='/order/powerwall'><img src={Powerwall} alt='Powerwall' /></NavLink>
                                <div>
                                    <NavLink to='/learn/powerwall'>Learn</NavLink>
                                    <NavLink to='/order/powerwall'>Order</NavLink>
                                </div>
                            </div>
                            <div className="energy">
                                <NavLink to='/order/megapack'><img src={Megapack} alt='Megapack' /></NavLink>
                                <div>
                                    <NavLink to='/learn/megapack'>Learn</NavLink>
                                    <NavLink to='/order/megapack'>Order</NavLink>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div>
                        <div className="drop" id="drop-charging">Charging</div>
                        {/* <div className="charging-drop">
                            <div className="charging">
                                <NavLink to='/order/charging'><img src={Charging} alt='Charging' /></NavLink>
                                <div>
                                    <NavLink to='/learn/charging'>Learn</NavLink>
                                    <NavLink to='/order/charging'>Order</NavLink>
                                </div>
                            </div>
                            <div className="charging">
                                <NavLink to='/order/homeCharging'><img src={HomeCharging} alt='Home Charging' /></NavLink>
                                <div>
                                    <NavLink to='/learn/homeCharging'>Learn</NavLink>
                                    <NavLink to='/order/homeCharging'>Order</NavLink>
                                </div>
                            </div>
                            <div className="charging">
                                <NavLink to='/order/supercharging'><img src={Supercharging} alt='Supercharging' /></NavLink>
                                <div>
                                    <NavLink to='/learn/supercharging'>Learn</NavLink>
                                    <NavLink to='/order/supercharging'>Order</NavLink>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <div className="drop" id="drop-discover">Discover</div>
                        {/* <div className="discover-drop">
                            <div className="discover">
                                <div>Resources</div>
                                <div>
                                    <NavLink to='/drive'>Demo Drive</NavLink>
                                    <NavLink to='/insurance'>Insurance</NavLink>
                                    <NavLink to='/guides'>Video Guides</NavLink>
                                    <NavLink to='/stories'>Customer Stories</NavLink>
                                    <NavLink to='/events'>Events</NavLink>
                                </div>
                                <div>Location Services</div>
                                <div>
                                    <NavLink to='/find'>Find Us</NavLink>
                                    <NavLink to='/planner'>Trip Planner</NavLink>
                                    <NavLink to='/collision'>Find a Collision Center</NavLink>
                                    <NavLink to='/installer'>Find a Certified Installer</NavLink>
                                </div>
                                <div>Company</div>
                                <div>
                                    <NavLink to='/about'>About</NavLink>
                                    <NavLink to='/careers'>Careers</NavLink>
                                    <NavLink to='/investor'>Investor Relations</NavLink>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div>
                        <div className="drop" id="drop-shop">Shop</div>
                        {/* <div className="shop-drop">
                            <div className="shop">
                                <NavLink to='/order/charging2'><img src={Charging2} alt='Charging' /></NavLink>
                                <NavLink to='/order/charging2'>Charging</NavLink>
                            </div>
                            <div className="shop">
                                <NavLink to='/order/accessories'><img src={VehicleAccessories} alt='Vehicle Accessories' /></NavLink>
                                <NavLink to='/order/accessories'>Vehicle Accessories</NavLink>
                            </div>
                            <div className="shop">
                                <NavLink to='/order/apparel'><img src={Apparel} alt='Apparel' /></NavLink>
                                <NavLink to='/order/apparel'>Apparel</NavLink>
                            </div>
                            <div className="shop">
                                <NavLink to='/order/lifestyle'><img src={Lifestyle} alt='Lifestyle' /></NavLink>
                                <NavLink to='/order/lifestyle'>Lifestyle</NavLink>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div id="right-bar">
                    <NavLink to='/support'><i class="fa-regular fa-circle-question"></i></NavLink>
                    <NavLink to='/language' id="globe"><i class="fa-solid fa-globe"></i></NavLink>
                    <NavLink to='/teslaaccount'><i class="fa-regular fa-circle-user"></i></NavLink>
                </div>
            </nav>
            <div>
                <div className="models-drop">
                    <div className="models">
                        <NavLink to='/order/modelS'><img src={ModelS} alt='Model S' /></NavLink>
                        <h3 className="modelTag">Model S</h3>
                        <div className="learnOrder">
                            <NavLink className='learn'>Learn</NavLink>
                            <NavLink className='order'>Order</NavLink>
                        </div>
                    </div>
                    <div className="models">
                        <NavLink to='/order/model3'><img src={Model3} alt='Model 3' /></NavLink>
                        <h3 className="modelTag">Model 3</h3>
                        <div className="learnOrder">
                            <NavLink to='/learn/model3' className='learn'>Learn</NavLink>
                            <NavLink to='/order/model3' className='order'>Order</NavLink>
                        </div>
                    </div>
                    <div className="models">
                        <NavLink to='/order/modelX'><img src={ModelX} alt='Model X' /></NavLink>
                        <h3 className="modelTag">Model X</h3>
                        <div className="learnOrder">
                            <NavLink to='/learn/modelX' className='learn'>Learn</NavLink>
                            <NavLink to='/order/modelX' className='order'>Order</NavLink>
                        </div>
                    </div>
                    <div className="models">
                        <NavLink to='/order/modelY'><img src={ModelY} alt='Model Y' /></NavLink>
                        <h3 className="modelTag">Model Y</h3>
                        <div className="learnOrder">
                            <NavLink to='/learn/modelY' className='learn'>Learn</NavLink>
                            <NavLink to='/order/modelY' className='order'>Order</NavLink>
                        </div>
                    </div>
                </div>

                <div className="energy-drop">
                    <div className="energy">
                        <NavLink to='/order/solarPanels'><img src={SolarPanels} alt='Solar Panels' /></NavLink>
                        <div>
                            <NavLink to='/learn/solarPanels'>Learn</NavLink>
                            <NavLink to='/order/solarPanels'>Order</NavLink>
                        </div>
                    </div>
                    <div className="energy">
                        <NavLink to='/order/solarRoof'><img src={SolarRoof} alt='Solar Roof' /></NavLink>
                        <div>
                            <NavLink to='/learn/solarRoof'>Learn</NavLink>
                            <NavLink to='/order/solarRoof'>Order</NavLink>
                        </div>
                    </div>
                    <div className="energy">
                        <NavLink to='/order/powerwall'><img src={Powerwall} alt='Powerwall' /></NavLink>
                        <div>
                            <NavLink to='/learn/powerwall'>Learn</NavLink>
                            <NavLink to='/order/powerwall'>Order</NavLink>
                        </div>
                    </div>
                    <div className="energy">
                        <NavLink to='/order/megapack'><img src={Megapack} alt='Megapack' /></NavLink>
                        <div>
                            <NavLink to='/learn/megapack'>Learn</NavLink>
                            <NavLink to='/order/megapack'>Order</NavLink>
                        </div>
                    </div>
                </div>

                <div className="charging-drop">
                    <div className="charging">
                        <NavLink to='/order/charging'><img src={Charging} alt='Charging' /></NavLink>
                        <div>
                            <NavLink to='/learn/charging'>Learn</NavLink>
                            <NavLink to='/order/charging'>Order</NavLink>
                        </div>
                    </div>
                    <div className="charging">
                        <NavLink to='/order/homeCharging'><img src={HomeCharging} alt='Home Charging' /></NavLink>
                        <div>
                            <NavLink to='/learn/homeCharging'>Learn</NavLink>
                            <NavLink to='/order/homeCharging'>Order</NavLink>
                        </div>
                    </div>
                    <div className="charging">
                        <NavLink to='/order/supercharging'><img src={Supercharging} alt='Supercharging' /></NavLink>
                        <div>
                            <NavLink to='/learn/supercharging'>Learn</NavLink>
                            <NavLink to='/order/supercharging'>Order</NavLink>
                        </div>
                    </div>
                </div>

                <div className="discover-drop">
                    <div className="discover">
                        <div>Resources</div>
                        <div>
                            <NavLink to='/drive'>Demo Drive</NavLink>
                            <NavLink to='/insurance'>Insurance</NavLink>
                            <NavLink to='/guides'>Video Guides</NavLink>
                            <NavLink to='/stories'>Customer Stories</NavLink>
                            <NavLink to='/events'>Events</NavLink>
                        </div>
                        <div>Location Services</div>
                        <div>
                            <NavLink to='/find'>Find Us</NavLink>
                            <NavLink to='/planner'>Trip Planner</NavLink>
                            <NavLink to='/collision'>Find a Collision Center</NavLink>
                            <NavLink to='/installer'>Find a Certified Installer</NavLink>
                        </div>
                        <div>Company</div>
                        <div>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/careers'>Careers</NavLink>
                            <NavLink to='/investor'>Investor Relations</NavLink>
                        </div>
                    </div>
                </div>

                <div className="shop-drop">
                    <div className="shop">
                        <NavLink to='/order/charging2'><img src={Charging2} alt='Charging' /></NavLink>
                        <NavLink to='/order/charging2'>Charging</NavLink>
                    </div>
                    <div className="shop">
                        <NavLink to='/order/accessories'><img src={VehicleAccessories} alt='Vehicle Accessories' /></NavLink>
                        <NavLink to='/order/accessories'>Vehicle Accessories</NavLink>
                    </div>
                    <div className="shop">
                        <NavLink to='/order/apparel'><img src={Apparel} alt='Apparel' /></NavLink>
                        <NavLink to='/order/apparel'>Apparel</NavLink>
                    </div>
                    <div className="shop">
                        <NavLink to='/order/lifestyle'><img src={Lifestyle} alt='Lifestyle' /></NavLink>
                        <NavLink to='/order/lifestyle'>Lifestyle</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
