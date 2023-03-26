import React from "react"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function DisplayScreenings(props) {
  const { date, movies } = props

  return (
    <div className="screening">
      <h2>{date}</h2>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Link to={`/movie-detail/${movie.id}`}>
              <Card style={{ minWidth: "18rem", margin: "10px", maxWidth: "280px" }}>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    {new Intl.DateTimeFormat("en-EN", {
                      hour: "numeric",
                      minute: "numeric",
                    }).format(new Date(movie.time))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}