
import './App.css';
import ButtonGroup from './components/ButtonGroup';
import HelloWorld from './components/HelloWorld';
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <p>Hello React!</p>
      <HelloWorld tech={store.getState().tech} />
      <ButtonGroup technologies={[
        "React",
        "Elm",
        "React-redux"]} />
    </div>
  );
}

export default App;
