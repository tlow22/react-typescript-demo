import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Status } from './components/Status';
import { Heading } from './components/Heading';

import './App.css';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
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
      <Button handleClick={(event, id) => console.log('Button clicked', event, id)} />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{border: '1px solid black', padding: '1rem'}}>
        <Heading>Heading placed inside Container component</Heading>
      </Container>
    </div>
  );
}

export default App;
