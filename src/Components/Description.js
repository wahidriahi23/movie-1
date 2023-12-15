import {React} from 'react';
import movie from './Movie'
import {useParams, Link, Outlet} from 'react-router-dom';
import './Description.css';

const Description = () => {
    const {id}=useParams()
    const moviee=movie.find((el)=>el.id>=id)
    console.log(moviee);
    
    return (     
        <div className="description">
            <div className="desc-content">
                <h3>{moviee.title} Description</h3>
                <p>{moviee.description}</p>
            </div>
            <ul className='nav'>
                <li>
                    <Link className='link' to={"/home"}> Home  Page !!</Link>
                </li>
            
                <li >
                    <Link className='link' to={`/description/${moviee.id}/video`}> Video Trailer !!</Link>
                </li>
                <Outlet/>
            </ul>
        </div>         
    )
};

export default Description;