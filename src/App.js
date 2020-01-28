import React, { Component } from "react";
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import Animals from "./Animals.json";
import Alert from "./components/Alert/index";
import Score from "./components/Score";
import './App.css';

class App extends Component {
  state = {
    animals: Animals,
    topScore: 0,
    alertMessage: "",
    score: 0
  };
  reset = _ => {
    let newAnimals = Array.from(this.state.animals)
    newAnimals.forEach((value, index) => {
      value.clicked = false
    })
    this.setState({ animals: newAnimals })
    this.setState({ score: 0 })
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
      // this.score=
      //console.log("x",newAnimals)
      this.setState({ animals: newAnimals })

    }
    this.shuffleAnimals()
    //console.log("click",pick, clicked)
  };
  shuffleAnimals = () => {
    this.setState({ animals: this.shuffleArray(this.state.animals) })
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
        <Score scoreCard={this.score} />
        <Alert message={this.alertMessage} />

        {/* <Score/> */}
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
