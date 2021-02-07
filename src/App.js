import React, { Component } from 'react';

// jsx でのコーディング
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
// class App extends Component {
//   render() {
//     return React.createElement (
//         "div",
//         null,
//         "Hello,world!!!!!!!!!!!!!"
//       );
//   }
// }

export default App;
