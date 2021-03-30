import "./App.css";
import FriendStatus from "./components/FrientsStatus";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const status = <FriendStatus friend={{ id: 1 }}></FriendStatus>;
    return (
      <div className="App">
        {this.state.show ? status : ""}
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default App;
