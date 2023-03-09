import Card from 'react-bootstrap/Card';
import ReactStars from'react-stars';
import'./MovieCard.css';

function MovieCard({movie}) {                                                    
    return (
        <Card style ={{width: '18rem'}} className='movieCard'>
            <Card.Img variant="top" src={movie.posterUrl}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Title>{movie.description}</Card.Title>
                <Card.Title>{movie.rate}</Card.Title>
                <ReactStars
                size={26}
                half={false}
                exit={false}
                count={5}
                value={movie.rate}

                />
            </Card.Body>
        </Card>
    )
}

export default MovieCard