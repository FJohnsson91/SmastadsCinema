import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default function DisplayMovie(props) {

  let { title, description } = props
  let { posterImage, length, categories } = description

  posterImage = 'https://cinema-rest.nodehill.se/' + posterImage

  return (
    <Container className='movies'>
      <Row md={2} lg={3} xxl={4} className="mt-4">
        <Col md={3}>
          <Card style={{ width: '18rem', height: '550px' }}>
            <Card.Img variant="top" src={posterImage} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <p><span><b>Category:</b></span> {categories}</p>
                <p><span><b>Length:</b></span> {length} min</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

