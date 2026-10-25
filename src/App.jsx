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

function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/productdetail" component={ProductDetailPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </PageContent>
      <ToastContainer position="top-right" />
    </Router>
  )
}

export default App