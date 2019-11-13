import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Mac() {

    return (

        <div className="App">

            <nav>
                <Link to="/mac/macbook">MacBook    </Link>
                <Link to="/mac/macbookpro">MacBook Pro</Link>

            </nav>


        </div>

    );
}

export default Mac;