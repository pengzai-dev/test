
import { Component } from 'react';
import ChildChild from '../ChildChild'
export default class Child extends Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nexProps){
        console.log('receiveProps',nexProps,this.props);
    }
    // shouldComponentUpdate(){

    // }
    render(){
        return <div >
            <ChildChild childchildprops="1"></ChildChild>
            <ChildChild childchildprops="2"></ChildChild>
        </div>
    }
}