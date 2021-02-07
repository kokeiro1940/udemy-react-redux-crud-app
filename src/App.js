import React from 'react';

function App() {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 8 },
    { name: "knowname"}
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

User.defaultProps = {
  age: 111
}

export default App;
