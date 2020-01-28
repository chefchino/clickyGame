import React, { Component } from "react";
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import Animals from "./Animals.json";
import Alert from "./components/Alert/index";
import './App.css';
class App extends Component {
  state = {
    animals: Animals,
    topScore: 0,
    alertMessage: "",
    alertWinner: "",
    score: 0
  };
  reset = _ => {
    let newAnimals = Array.from(this.state.animals)
    newAnimals.forEach((value, index) => {
      value.clicked = false
    })
    this.setState({ animals: newAnimals, score: 0, alertWinner: ""})
  }
  handlePicked = event => {
    const pick = event.target.attributes.getNamedItem("name").value;
    const clicked = event.target.attributes.getNamedItem("clicked").value;
    console.log(clicked)
    if (clicked === "true") {
      this.alertMessage = `YOU LOSE ${pick.toUpperCase()} was already picked!`
      this.reset()
    } else {
      let newAnimals = Array.from(this.state.animals)
      this.alertMessage = `NICE ONE!!!`
      let x;
      newAnimals.forEach((value, index) => {
        if (value.name === pick) x = index
      })
      newAnimals[x].clicked = true
      let newScore    = this.state.score + 1
      let newTopScore =  (newScore > this.state.topScore) ? newScore : this.state.topScore

      // let newTopScore = Math.max(newScore, +-this.state.topScore)

      this.setState({ score: newScore });
      this.setState({ topScore: newTopScore })
      //console.log("x",newAnimals)
      this.setState({ animals: newAnimals })
      this.topScorer()
    }
    this.shuffleAnimals()
  };
  shuffleAnimals = () => {
    this.setState({ animals: this.shuffleArray(this.state.animals) })
  }
  topScorer = () => {
    if (this.state.score === 17) {
      this.alertWinner = "Wow you have a GOOD MEMORY!!!"
      this.reset()
    }
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
    return (
      <div>
        <h1 className="title"> ClickyGame</h1>
        <h3>Score: {this.state.score}</h3>
        <h3>topScore: {this.state.topScore}</h3>
        <Alert message={this.alertMessage} />
        <Alert winner={this.alertWinner} />
        <Wrapper>
          {this.state.animals.map(animal => (
            <Card
              key={animal.id}
              name={animal.name}
              image={animal.image}
              handlePicked={this.handlePicked}
              clicked={animal.clicked}
            />
          ))
          }
        </Wrapper>
      </div>
    )
  }
};
export default App;
