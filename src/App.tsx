import { Greet } from './components/Greet';
import { Person } from './components/Person';
import './App.css';

function App() {
  const personName = {
    first: 'Thaddeus',
    last: 'Hunt'
  }

  return (
    <div className="App">
      <div className='App'>
        <Greet name='Thaddeus' messageCount={10} isLoggedIn={true} />
        <Person name={personName} />
      </div>
    </div>
  );
}

export default App;
