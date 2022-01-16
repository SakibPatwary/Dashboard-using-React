import Sidebar from "../src/Component/Dashboard/Sidebar";
import Topbar from "../src/Component/Dashboard/Topbar";
import "./App.css";
import Home from "../src/Component/Dashboard/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "../src/Component/Dashboard/Pages/UserList";
import User from "../src/Component/Dashboard/Pages/User";
import NewUser from "../src/Component/Dashboard/Pages/NewUser";
import ProductList from "../src/Component/Dashboard/Pages/ProductList";
import Product from "../src/Component/Dashboard/Pages/Product";
import NewProduct from "../src/Component/Dashboard/Pages/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
