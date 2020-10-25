import React from 'react';
import {Navbar,Footer} from './components';
import {GlobalStyle} from './GlobalStyles'
import Home from './pages/HomePage/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Bestsellers from './pages/Bestsellers/Bestsellers';
import BooksbyAge from './pages/BooksbyAge/BooksbyAge';
import Adult from './pages/Adult/Adult';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Corporate from './pages/Corporate/Corporate';
import View from './pages/View/View';
import Success from './pages/Success/Success';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import {productData} from './pages/HomePage/Data';
import Terms from './pages/Terms/Terms';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/vividly' exact component={Home}></Route>
        <Route path='/bestsellers' exact component={Bestsellers}></Route>
        <Route path='/childrenbook' exact component={BooksbyAge}></Route> 
        <Route path='/adultSection' exact component={Adult}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/contact' exact component={Contact}></Route>
        <Route path='/FAQ' exact component={FAQ}></Route>
        <Route path='/corporate' exact component={Corporate}></Route>        
        <Route path='/viewbook' exact component={View}></Route>               
        <Route path='/Success' exact component={Success}></Route>             
        <Route path='/Cart' cart={productData} exact component={Cart}></Route>                     
        <Route path='/Order' exact component={Order}></Route>                    
        <Route path='/Terms' exact component={Terms}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
