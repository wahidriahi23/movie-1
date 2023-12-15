import React from 'react';
import {Link,Outlet} from 'react-router-dom'
import './NoPage.css';

function NoPage() {
    return (
        <div className='not-found'>
            <h1>404 NOT FOUND !!</h1>
            <Link to="/home" > Go To Home Page !! </Link>
            <Outlet/>
        </div>
    )
}

export default NoPage