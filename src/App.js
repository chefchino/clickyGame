import React, {Component} from "react";
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import Animals from "./Animals.json";
import './App.css';

class App extends Component {
  state = {
    animals: Animals,
    topScore: 0,
    alertMessage: ""
  };
 handlePicked = event => {
   const pick =
   event.target.attributes.getNamedItem("name").value;
   this.shuffleAnimals()
   console.log("click",pick)
 };
 shuffleAnimals = () => {
  this.setState({animals: this.shuffleArray(this.state.animals)})
}

shuffleArray = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
  render() {

    return(
      <div>
      <h1 className="title"> ClickyGame</h1>
        <Alert>

        </Alert>
        <Score>

        </Score>
      <Wrapper>

      {this.state.animals.map(animal => (
        <Card
        key={animal.id}
        name={animal.name}
        image={animal.image}
        handlePicked={this.handlePicked}
        />
        ))
      }
      </Wrapper>
      </div>
    )
}};

export default App;
