import React from 'react';
import styles from './CharacterCard.module.css';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CharacterCard(character) {
    return (
        <div className={styles.item} key={character.id}>
            <Card style={{ width: '16rem' }}>
              <Link to={`/${character.id}`}>
              <Card.Img variant="top" src={character.image} alt={character.name}/>
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
              </Card.Body>
              </Link>
            </Card>
        </div>
    );
}
export default CharacterCard;
