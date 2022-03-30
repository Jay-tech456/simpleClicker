
import './App.css';
import React, {useState} from 'react';


function App() {
// first variable is the default value

  let decrementCount = function(){
    // setcount(count - 1);     // incorrect way

    if(count === -100){
        alert("Congrats on your -100 click")
        console.log("Changing the value back to 0")
        setState(prevState => {
          return{
            count:0
          }
        })
    } else {
    setState( prevState => {
      return { count: prevState.count - 1 }
  })
}
}

  let incrementCount = function(){
    // setcount(count  1);     // incorrect way
    if(count === 100){
      alert("Congrats on your 100 click")
      console.log("Changing count back to 0....")
      setState(prevState => {
        return {

            count: 0
        };
      })
    } else {
    setState( prevState => {
      return {
        count: prevState.count + 1,
      }
  })
}
  }


  const [state, setState] = useState({count:0})
  const count = state.count
  return (
    <>
    <center>
    <h1>Here is a tool that is used for incrementing the value</h1>
    <button onClick = {decrementCount}>-</button>
    <span>{count}</span>
    <button onClick = {incrementCount}>+</button>
    </center>
    </>
  );
}

export default App;
