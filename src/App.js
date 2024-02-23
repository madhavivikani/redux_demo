import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Counter from './app/reducer/Counter';
// import }
function App() {

  const count = useSelector((state)=>state.counter.value)
  const name = useSelector((state)=>state.counter.name)
  const email = useSelector((state)=>state.counter.email)


  return (
    <div className="App">
      <h1>Value:{count}</h1>
      <h1>Value:{name}</h1>
      <h1>Value:{email}</h1>
      <Counter/>
    </div>
  );
}

export default App;
