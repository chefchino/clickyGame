import React from "react";
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import friends from "./friends.json";
import './App.css';

class App extends React.Component {
  state = {
    friends: friends
  };
  // handlePicked = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !==id);
  //   this.setState({ friends });

  // };

  
  render() {
    console.log(this.state.friends)
    return(
      <div>

      <h1 className="title"> ClickyGame</h1>
      <Wrapper>

      {this.state.friends.map(friend => (
        <Card
        id={friends.id}
        key={friends.name}
        name={friend.name}
        image={friend.image}
        handledPicked={this.handledPicked}
        />
        ))
      }
      </Wrapper>
      </div>
    )
}};

export default App;
