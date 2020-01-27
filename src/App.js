import React, {Component} from "react";
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import Animals from "./Animals.json";
import './App.css';

class App extends Component {
  state = {
    Animals: Animals
  };
 handlePicked = event => {
   const pick =
   event.target.attributes.getNamedItem("name").value;
   this.shuffleAnimals()
   console.log("click",pick)
 };
 shuffleAnimals = () => {
  this.setState(this.state.Animals = this.shuffleArray(this.state.Animals))
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
      <Wrapper>

      {this.state.Animals.map(animal => (
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
