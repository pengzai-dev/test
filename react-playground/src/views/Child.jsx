import { Component } from "react";

class Child extends Component{
    render(){
        const { clickHandle } = this.props;
        return <button onClick={clickHandle}>点我</button>;
    }
}
export default Child;