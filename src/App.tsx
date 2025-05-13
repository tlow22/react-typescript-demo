import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Status } from './components/Status';
import { Heading } from './components/Heading';

import './App.css';
import { Oscar } from './components/Oscar';

function App() {
  const personName = {
    first: 'Thaddeus',
    last: 'Hunt'
  }

  return (
    <div className="App">
      <div className='App'>
        <Greet name='Thaddeus' isLoggedIn={true} />
        <Person name={personName} />
        <Status status='loading' />
        
        <Oscar>
          <Heading>Heading placed inside Oscar component</Heading>
        </Oscar>
      </div>
    </div>
  );
}

export default App;
