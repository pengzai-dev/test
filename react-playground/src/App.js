import "./App.css";
import FriendStatus from "./components/FrientsStatus";
import { Component } from "react";
import Parent from "./components/Parent";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    //const status = <FriendStatus friend={{ id: 1 }}></FriendStatus>;
    return (
      <div className="App">
        {/* {this.state.show ? status : ""}
        <button onClick={this.handleClick}>click</button> */}
        <Parent parentProp={1}></Parent>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default App;
