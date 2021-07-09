import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function IPhone() {

    return (

        <div className="App">

            <nav>
                {/* <h1>testing</h1> */}
                <Link to="/iphone/iphonexr">iPhone XR       </Link>
                <Link to="/iphone/iphonexl">iPhone XL</Link>
            </nav>
        </div>
    );
}

export default IPhone;