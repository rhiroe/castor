import logo from '../images/logo.svg';
import './App.css';
import React from 'react';

class Sample extends React.Component {
  render() {
    return (
      <button className={'button'}>
        {this.props.text}
      </button>
    )
  }
}

function App() {
  return (
    <header className="">
    </header>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <Sample text={'ボタンだよ'}/>
    // </div>
  );
}

export default App;
