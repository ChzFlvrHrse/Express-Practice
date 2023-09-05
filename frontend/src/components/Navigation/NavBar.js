import React, { useState, useEffect, Nav } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllUsersThunk } from "../../store/AllUsers";
import ModelS from './ModelS.avif'
import Model3 from './Model3.avif'
import ModelX from './ModelX.avif'
import ModelY from './ModelY.avif'
import "./NavBar.css"

export default function NavBar() {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllUsersThunk())
    // }, [dispatch]);

    // const user = useSelector(state => state.session.user);

    // if (user) {
    return (
        <nav id='nav'>
            <div id="logo">
                <NavLink to='/'>Thesla</NavLink>
            </div>
            <div id='middle-bar'>
                <div>
                    <div className="hover-drop">Vehicles</div>
                    <div className="vehicle-drop">
                        <Nav to='/order/modelS'><img src={ModelS} alt='Model S'>Model S</img></Nav>
                        <div>
                            <Nav to='/learn/modelS'>Learn</Nav>
                            <Nav to='/order/modelS'>Order</Nav>
                        </div>
                    </div>
                    <div className="vehicle-drop">
                        <Nav to='/order/Model3'><img src={Model3} alt='Model 3'>Model 3</img></Nav>
                        <div>
                            <Nav to='/learn/model3'>Learn</Nav>
                            <Nav to='/order/model3'>Order</Nav>
                        </div>
                    </div>
                    <div className="vehicle-drop">
                        <Nav to='/order/ModelX'><img src={ModelX} alt='Model X'>Model X</img></Nav>
                        <div>
                            <Nav to='/learn/modelX'>Learn</Nav>
                            <Nav to='/order/modelX'>Order</Nav>
                        </div>
                    </div>
                    <div className="vehicle-drop">
                        <Nav to='/order/modelY'><img src={ModelY} alt='Model Y'>Model Y</img></Nav>
                        <div>
                            <Nav to='/learn/modelY'>Learn</Nav>
                            <Nav to='/order/modelY'>Order</Nav>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hover-drop">Energy</div>
                </div>
                <div>
                    <div className="hover-drop">Charging</div>
                </div>
                <div>
                    <div className="hover-drop">Discover</div>
                </div>
                <div>
                    <div className="hover-drop">Shop</div>
                </div>
            </div>
        </nav>
    )
    // } else {
    //     return (
    //         <nav>
    //             <div>

    //             </div>
    //         </nav>
    //     )
    // }
}
