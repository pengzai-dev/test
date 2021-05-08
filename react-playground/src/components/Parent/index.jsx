
import { Component } from 'react';
import Child from '../Child'
export default class Parent extends Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(){}
    // shouldComponentUpdate(nextpropx){
    //     return true;
    // }
    componentWillUpdate(){
        console.log('will upate');
    }
    render() {
        console.log('Parent update');
        return <div>
            <Child childProps="1"></Child>
        </div>
    }
}