import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 8 },
    // PropTypes で Warning がでるようになる
    // { name: "knowname" },
    // { name: 22, age: "hoge"}
  ]
  return (
    <div>
      {/* 大文字スタートで tag ではないと認識 */}
      {/* <User name={"Taro"} age={10} /> */}
      {
        profiles.map(function (profile, index) {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi, {props.name}, and {props.age} yeas old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// User.defaultProps = {
//   age: 111
// }

export default App;
