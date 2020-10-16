import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignPage from './pages/sign-page/sign-page.component';

const HatsPage = ({ match, location }) => {
  console.log(match, location);
  return (
    <h1>
      HATS PAGE
    </h1>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/signin' component={SignPage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
