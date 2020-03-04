import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import { Button, Form } from 'react-bootstrap';
import CharacterCard from '../CharacterCard/CharacterCard.js'

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/";

class CharacterList extends React.Component {
  // Initialize the State in Class Component.
  constructor(props) {
    super(props);
    this.state = {characters: [], searchText: '', displayList: []};

    this.handleInput = this.handleInput.bind(this);
    this.deepSearch = this.deepSearch.bind(this);
  }

  // Use ASYNC/AWAIT inside lifecycle method.
  async componentDidMount() {
    try {
      const response = await fetch(API_URL).then(resp => resp.json());
      // Add the current characters to the chars array.
      let chars = [...this.state.characters];
      // Add the results from the API response.
      chars.push(...response.results);

      // ALWAYS use this.setState() in a Class Method.
      this.setState({
        characters: chars
      });
    } catch (e) {
      console.error(e);
    }
  }

  handleInput(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  async deepSearch(){
    try {
      const response2 = await fetch(API_URL + `?name=${this.state.searchText}`)
      .then(resp => resp.json());
  
      this.setState({
        characters: response2.results
      });
      
    } catch (e) {
      console.error(e);
    }
  }

  // Required render() method in Class Component.
  render() {
    // Create an array of JSX to render
    const characters = this.state.characters
    .filter(x => x.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
    .map(character => {
      // This should render Character components. - Remember the key.
      return (
          CharacterCard(character)
      );
    });

    // Render MUST return valid JSX.
    return (
      <div>
        <div className={styles.CharacterList}>
          <h1>List of characters</h1>
            <div className={styles.formContainer}>
              <Form>
                <Form.Group>
                  <input type="text" value={this.state.searchText} onChange={this.handleInput}/>
                </Form.Group>
                <Button onClick={this.deepSearch}>Fetch New List</Button>
              </Form>
            </div>
          <div className={styles.cardContainer}>{characters}</div>
        </div>
      </div>
    );
  }
}

export default CharacterList;
