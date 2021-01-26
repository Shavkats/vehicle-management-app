import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="jumbotron" style={{background: "#D0CFCF"}}>
            <h1>Vehicle Management Application</h1>
            <p>React based vechicle management application</p>
            <Link to="about" className="btn btn-primary">Learn more</Link>
        </div>
    );
}

export default Home;

