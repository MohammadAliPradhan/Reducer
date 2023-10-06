import logo from './logo.svg';
import './App.css';
import reducer from './reducer';
import { useReducer } from 'react';


function App() {
  const [state, setState] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        setState({ type: 'incremented_age' })
      }}>
        Increment Age
      </button>
      <p>Hello! you are {state.age}</p>

      <button onClick={()=>{
        setState({type: 'decremeneted_age'})
      }}>Decrement Age</button>

    </>


  );
}

export default App;
