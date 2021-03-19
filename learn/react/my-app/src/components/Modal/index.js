import { Component, createRef } from 'react';
import ReactDOM from 'react-dom';

export default class A extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.myRef = createRef();
  }

  render() {
    const wrap = (
      <div
        style={{
          width: 100,
          height: 100,
          background: 'red',
          position: 'fixed',
          left: '50%',
          top: '50%',
          marginLeft: -50,
          marginTop: -50,
        }}
        ref={this.myRef}
      >
        <button
          onClick={() => {
            this.close();
          }}
        >
          关闭
        </button>
        {this.props.children}
      </div>
    );
    return ReactDOM.createPortal(this.state.active ? wrap : null, document.body);
  }
  show() {
    this.setState({ active: true });
    console.log(this.myRef);
  }
  close() {
    
    this.setState({ active: false });
  }
}
