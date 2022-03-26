import './App.css';
import Showroom from './components/Showroom/Showroom';

function App() {
  return (
    <div className="App">
      <h1>Affinity Car Showroom</h1>
      <p>Choose any Four</p>
      <Showroom></Showroom>
      <div>
        <h1>How React Works?</h1>
        <p>React is js library which we use to make our websites for different projects. Actually React works in declarative code. In react there is JSX means JavaScript XML. There are react components and babel transpiler to work.</p>
        <h1>Props VS State.</h1>
        <p>Props are arguments passed into React components. Props are passed to components via HTML attributes. React components has a built-in state object. The state object can contain as many properties as you like.</p>
        <h1>How useState works?</h1>
        <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>
      </div>
    </div>
  );
}

export default App;
