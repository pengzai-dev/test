import { Component, createRef } from 'react';
// import ReactDOM from 'react-dom';
import styles from './style.css';
import Modal from '../Modal/index';
export default class A extends Component {
  constructor(){
    super();
    this.modal = createRef();
  }
  render() {
    return (
      <div className="A">
        <button onClick={() => this.handleClick()}>打开弹窗</button>
        <Modal ref={this.modal}></Modal>
      </div>
    );
  }
  handleClick() {
    console.log(this.modal.current);
    console.log(this.modal.current.show());
  }
}
