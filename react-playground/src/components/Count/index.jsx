import React from 'react';
export default class CountControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption:th
        };
    }
    render(){
        return <div>
            <button>+</button>
            <span> </span>
            <button>-</button>
        </div>
    }
}