import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
const shuffle = require(`shuffle-array`)

class App extends React.Component {
  state = {
    friends,
    count: 0,
    array: []
  };
  
  shuffleFriends = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = shuffle(this.state.friends)
    console.log(this.state.array)
    
    const array = this.state.array
    if(id !== array.id){
      console.log(id)
      this.state.array.push(id)
    }else {
      alert("id exists")
    }
  
    
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    this.setState({ count: this.state.count + 1 });

    
  };
  scoreFriends = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
   
    // Set this.state.friends equal to the new friends array
    this.setState({ count: this.state.count + 1 });
    
  };

  render() {
    return (

      <Wrapper>
        {this.state.friends.map(friend => (
        <FriendCard
          id={friend.id}
          key={friend.key}
          image={friend.image}
          count={this.state.count}
          shuffleFriends={this.shuffleFriends}
        
        />

        ))}
      </Wrapper>
    )
    
  }
}

export default App;
