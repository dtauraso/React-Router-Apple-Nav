import React from "react"
import {Route, NavLink} from "react-router-dom";
function Nav(){

    return (
        <div>
            <nav>
            <div class="nav-wrapper">
                <h1>We are home</h1>
            {/* <NavLink to="/mac" >Mac</NavLink>
            <NavLink to="/iphone">iPhone</NavLink> */}
            {/* <a href="#" class="brand-logo">Logo</a> */}
            {/* <ul id="nav-mobile" class="right hide-on-med-and-down"> */}
                {/* <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li> */}
            {/* </ul> */}
            </div>
        </nav>
        <Route exact path="/"
            render={(props) => {
                return 
            }}
        ></Route>
      </div>
    )
}

export default Nav;