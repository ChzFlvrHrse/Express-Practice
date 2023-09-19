import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as sessionActions from './store/session';
import NavBar from './components/Navigation/NavBar';
import Home from './components/Home/Home'

function App() {
  const dispatch = useDispatch();
  const [isLodaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
