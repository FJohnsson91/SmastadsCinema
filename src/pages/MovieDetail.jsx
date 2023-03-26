import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    (async () => {
      const movieResponse = await fetch(`/api/movies/${id}`)
      const movieData = await movieResponse.json()
      setMovie(movieData)
    })()
  }, [id])

  if (!movie) {
    return <div>Loading...</div>
  }

  const { title, description } = movie
  const { length, categories, posterImage } = description

  return (
    <Container fluid className="movie-detail">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={'https://cinema-rest.nodehill.se' + posterImage} style={{ maxHeight: '300px' }} />
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h3>{title}</h3>
              <h5>Length: {length} minutes</h5>
              <h5>Categories: {categories.join(', ')}</h5>
            </Card.Header>
            <Card.Body>
              <Card.Text>{description.plot}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}