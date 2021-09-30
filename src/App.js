import { Route, Switch } from 'react-router-dom'
import Details from './pages/Details';
import Home from './pages/Home';
import Header from './components/Header';

import './styles/main.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </>
  );
}

export default App;
