import React from 'react';
import movie from './Movie';
import {useParams, Link, Outlet} from 'react-router-dom'; 
import './TrailerPage.css'

function TrailerPage() {

    const {id}=useParams()
    const moviee=movie.find((el)=>el.id>=id)
    console.log(moviee);
    console.log(moviee.embedId);

    return ( 
        
        <div className="trailer">    
            <div className="trailer-video">
                <iframe
                    width="700"
                    height="400"
                    src={`https://www.youtube.com/embed/${moviee.embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <ul className='nav'>
                <li>
                    <Link className='link' to={`/description/${moviee.id}`}> Back to Description !!</Link>
                </li>
            
                <li >
                    <Link className='link' to={"/home"}> Home Page !!</Link>
                </li>
                <Outlet/>
            </ul>
        </div>
        
    )
}

export default TrailerPage
