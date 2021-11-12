import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Login/Login/Login';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Register from './Login/Register/Register';
import AddHomeProduct from './pages/AddHomeProduct/AddHomeProduct';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Explore from './pages/Home/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Shared/Footer/Footer';
import Navigation from './pages/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
     <Navigation></Navigation>
     <Switch>
    
    <Route path='/home'>
      <Home></Home>
    </Route>

    <Route exact path='/'>
      <Home></Home>
    </Route>

    <Route path='/addHomeProduct'>
      <AddHomeProduct></AddHomeProduct>
    </Route>
    <Route path='/login'>
      <Login></Login>
    </Route>
    <Route path='/register'>
      <Register></Register>
    </Route>
    <Route path='/explore'>
      <Explore></Explore>
    </Route>
    <PrivateRoute path='/dashboard'>
      <Dashboard></Dashboard>
    </PrivateRoute>
    <PrivateRoute exact path='/purchase/:productId'>
      <Purchase></Purchase>
    </PrivateRoute>
    <PrivateRoute exact path='/purchase'>
      <Purchase></Purchase>
    </PrivateRoute>
     </Switch>
     <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
