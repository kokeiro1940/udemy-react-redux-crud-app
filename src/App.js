// import React, { Component } from 'react';
import React from 'react';

// jsx でのコーディング (関数Component)
function App() {
  const dom = <input type="text" onChange={() => {console.log("I am cliked!")}} ></input>;
  return (
    <React.Fragment>
      <label>hoge</label>
      <label>{dom}</label>
    </React.Fragment>
  );
}

// // js での コーディング
// function App() {
//   return React.createElement (
//     "div",
//     null,
//     "Hello,world!!!!!!!!!!!!!"
//   );
// }

// // クラスComponent を用いたコーディング
// class App extends Component {
//   render() {
    // return React.createElement (
    //     "div",
    //     null,
    //     "Hello,world!!!!!!!!!!!!!"
    //   );
//   }
// }

export default App;
