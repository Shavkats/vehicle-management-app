import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cars from "./Cars";
import About from "./About";
import ManageCar from "./ManageCar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
    return(
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cars" component={Cars} />
                <Route path="/about" component={About} />
                <Route path="/car/:name" component={ManageCar} />
                <Route path="/car/" component={ManageCar} />
                <Redirect from="/vehicle-management-app" to="/" />
            </Switch>
        </div>
    )
}

export default App;
