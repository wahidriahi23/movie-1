import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Button,Modal} from 'react-bootstrap';
import './Add.css';
import PropTypes from "prop-types";
import movie from './Movie'


const Add = ({handleAdd}) => {
    const [movieAdd, setMovieAdd] = useState({
        title:'',
        description:'',
        posterURL:'',
        rating:0
    });
    const handleChange=(e)=>{
        setMovieAdd({...movieAdd,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        if(movieAdd.title==="" || movieAdd.description==="" || movieAdd.posterURL ===""|| movieAdd.embedId ==="" ){
            return alert("items required!!")
        }
        handleAdd(movieAdd)
        handleClose()
        setMovieAdd("")
        movieAdd.id=Math.floor(Math.random()*100)
        movie.push(movieAdd)
        console.log(movie)
    }
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Add-movie">
            <Button className='btn-add' variant="primary" onClick={handleShow}>
                Add Movies 
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="title">Add Movie Here!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder='Add a title here!' onChange={handleChange} name='title'  value={movieAdd.title}  />
                    <input type="text" placeholder='Add a description here!' onChange={handleChange} name='description'   value={movieAdd.description}    />
                    <input type='url' placeholder='Add the poster URL!' onChange={handleChange} name='posterURL'  value={movieAdd.posterURL}  />
                    <input type='text' placeholder='Add the String after "https://www.youtube.com/watch?v="' onChange={handleChange} name='embedId' value={movieAdd.embedId}  />
                    <input type='text' placeholder='Add rating here!' onChange={handleChange} name='rating' value={movieAdd.rating}  />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    
    ) ;
};
//Prototypes for controlling inputs
Add.propTypes = {
    movieAdd:PropTypes.shape({
        title:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        posterURL:PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired,
        embedId:PropTypes.string.isRequired
    }
    )
};

export default Add;