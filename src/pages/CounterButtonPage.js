import { useState } from 'react';
import Congratulations from '../Congratulations';
import CounterButton from '../CounterButton';

const CounterButtonPage = () => {
	const [numberOfClicks, setNumberOfClicks] = useState(0);
	const [hideMessage, setHideMessage] = useState(false);

	const increment = () => {
		setNumberOfClicks(numberOfClicks + 1);
	}

	return (
		<>
		{!hideMessage && <Congratulations
			onHide={() => setHideMessage(true)}
			numberOfClicks={numberOfClicks}
			threshold={10} />}
		<CounterButton numberOfClicks={numberOfClicks} onIncrement={increment} />
		</>
	);
}

export default CounterButtonPage;