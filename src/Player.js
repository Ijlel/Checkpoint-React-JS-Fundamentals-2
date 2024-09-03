import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Player = ({joueur}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={joueur.imageUrl} />
      <Card.Body>
        <Card.Title>{joueur.name}</Card.Title>
        <Card.Text>{joueur.equipe}</Card.Text>
        <Card.Text>{joueur.nationnalite}</Card.Text>
        <Card.Text>{joueur.jerseyNumber}</Card.Text>
        <Card.Text>{joueur.age}</Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Player