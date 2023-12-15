import { Link, Outlet} from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import './MovieCard.css';

const MovieCard = (props) => { 
    return (   
        <div className="card-container">
            <div className="card-hero">
                <Link to={`/description/${props.movie.id}`} style={{textDecoration:'none'}}>
                    <div className="poster-container">
                        <img src={props.movie.posterURL} className="poster" alt='Poster'/>
                        
                    </div>
                </Link><Outlet/>
                <div className="card-body">
                    <div className="card-content">
                        <Link to={`/description/${props.movie.id}`} style={{textDecoration:'none'}}>
                            <h4 className="movie-title">{props.movie.title}</h4>
                            <p className="movie-desc">
                                {props.movie.description}
                            </p>
                            <p className="movie-rating" > <Rating readonly={true} ratingValue={props.movie.rating} /> </p>
                        </Link><Outlet/>
                        <button  className="del-btn" onClick={()=>props.handleDelete(props.movie.title)} > Delete </button>                        
                    </div>
                </div>
            </div>     
        </div>
    );
};

export default MovieCard;
