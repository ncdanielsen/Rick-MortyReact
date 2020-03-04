// Write a function component 
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.
import React from "react";
import styles from "./Character.module.css";
import {Card, ListGroup } from 'react-bootstrap';

const API_URL = "https://rickandmortyapi.com/api/character/";

class Character extends React.Component{
    state = {
        character: Object,
        origin: Object
    }

    async componentDidMount() {
        try {
            const response = await fetch(API_URL + this.props.match.params.id).then(resp => resp.json());
            this.setState({
                character: response,
                origin: response.origin
            });
        }
        catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
        <div className={styles.character}>
            <Card bg="ligth" className={styles.cardStyle}>
                <Card.Body>
                    <Card.Title>{this.state.character.name}</Card.Title>
                    <Card.Img variant="top" src={this.state.character.image} alt={this.state.character.name}/>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Gender: {this.state.character.gender}</ListGroup.Item>
                        <ListGroup.Item>Status: {this.state.character.status}</ListGroup.Item>
                        <ListGroup.Item>Species: {this.state.character.species}</ListGroup.Item>
                        <ListGroup.Item>Origin: {this.state.origin.name}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
        )
    }
}
export default Character;