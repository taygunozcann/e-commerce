import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from './pages/HomePage'
import PageContent from './layout/PageContent';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/actions/clientActions";
import { fetchCategoriesIfNeeded } from './store/actions/productActions';

function App() {
  const dispatch = useDispatch();
  
    // Runs once when the app opens: restores the session if a token was remembered
    useEffect(() => {
      dispatch(autoLogin());                              // restore session ("remember me")
      dispatch(fetchCategoriesIfNeeded()).catch(() => {}); // categories for header + home page
    }, [dispatch]);

  return (
    <Router>
      <PageContent>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/shop/:gender" component={ShopPage} />
            <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
            <Route exact path="/productdetail" component={ProductDetailPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
      </PageContent>
      <ToastContainer position="top-right" />
    </Router>
  )
}

export default App