import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Movies() {

  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState('All')

  useEffect(() => {
    (async () => {
      const movieResponse = await fetch('/api/movies')
      setMovies(await movieResponse.json())
    })()
  }, [])

  const categories = ['All', ...new Set(movies.flatMap(movie => movie.description.categories))]
  const filteredMovies = movies.filter(movie => category === 'All' || movie.description.categories.includes(category))

  return (
    <>
      <div className="text-center">
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>
      <>
        {filteredMovies.map(({ id, title, description }) =>
          <div className='movieDiv' key={id}>
            <Container fluid className="movies">
              <Row>
                <Col>
                  <Link to={'/movie-detail/' + id}>
                    <Card style={{ minWidth: '18rem', margin: '10px', maxWidth: '280px' }}>
                      <Card.Img variant="top" src={'https://cinema-rest.nodehill.se' + description.posterImage} style={{ maxHeight: '300px', maxWidth: '290px' }} />
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text><b>Length: </b>{description.length}min</Card.Text>
                        <Card.Text><b>Categories: </b></Card.Text>
                        <Card.Text>{description.categories.join(', ')}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </>
    </>
  )
}