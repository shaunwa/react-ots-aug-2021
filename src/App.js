import { useState } from 'react';
import { Button } from '@material-ui/core';
import Congratulations from './Congratulations';
import CounterButton from './CounterButton';
import Greeting from './Greeting';
import PeopleList from './PeopleList';
import './App.css';

/*
  <button onclick="doSomething()">Click Me!</button>
*/

const people = [{
  id: '123',
  name: 'John',
  age: 40,
  hairColor: 'brown',
}, {
  id: '234',
  name: 'Helga',
  age: 25,
  hairColor: 'red',
}, {
  id: '345',
  name: 'Dwayne',
  age: 55,
  hairColor: 'blonde',
}];

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => {
	  setNumberOfClicks(numberOfClicks + 1);
  }

  const displayAlert = name => {
    alert(name + ' clicked!');
  }

  return (
    <div className="App">
      <header className="App-header">
		{!hideMessage && <Congratulations
			onHide={() => setHideMessage(true)}
			numberOfClicks={numberOfClicks}
			threshold={10} />}
		<CounterButton numberOfClicks={numberOfClicks} onIncrement={increment} />
        <Greeting name="Shaun" numberOfMessages={0} />
        <PeopleList people={people} />
        <Button background="primary" onClick={() => displayAlert('Shaun')}>Click Me</Button>
      </header>
    </div>
  );
}

export default App;
