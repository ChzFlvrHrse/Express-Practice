import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import model3Vid from './Model3-Home.mp4'
import './Home.css';

export default function Home() {
    return (
        <div>
            <div id="model3-home">
                <video muted autoPlay loop id="video">
                    <source src={model3Vid} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
