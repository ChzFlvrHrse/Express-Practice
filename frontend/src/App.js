import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import NavBar from './components/Navigation/NavBar';

function App() {
  const dispatch = useDispatch();
  const [isLodaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
