import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignPage from './pages/sign-page/sign-page.component';
import { auth } from './firebase/firebase.utils';

const HatsPage = ({ match, location }) => {
  console.log(match, location);
  return (
    <h1>
      HATS PAGE
    </h1>
  );
}

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className='app'>
      <Header />
      <div style={{ marginTop: '80px' }}>
        <div>Hola: {currentUser ? currentUser.displayName: 'por favor loggearse para mejor atención'}</div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/sign' component={SignPage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
