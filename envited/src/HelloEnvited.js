import React from ‘react’;

// In order for this HelloWorld to work.
// We need to create a class HelloWorld
class HelloEnvited extends React.Component {
 // Every React Component must have a method render()
 render() {
  return (
   <h1>Hello World!</h1>
  )
 }
}

// anything inside the file, won't be available will be outsid ethe file
// unless you export it
export default HelloEnviteds;
