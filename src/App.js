import './App.scss';

import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/crown-shop' component={HomePage} />
        <Route path='/crown-shop/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
