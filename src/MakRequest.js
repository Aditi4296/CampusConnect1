import React from "react";

import {Outlet, Link,useNavigate} from "react-router-dom"
export default function MakeRequest()
{
    return(
        <div className="makerequest">
            <p>MAKE A REQUEST FOR THE ITEMS YOU NEED!</p><p>WE WILL NOTIFY YOU AS SOON AS WE RECEIVE YOUR NEEDS.</p>
            <Link to="/request"><button type="button" className="requestbutton">Request here!</button></Link>
            <Outlet />
        </div>
    )
}