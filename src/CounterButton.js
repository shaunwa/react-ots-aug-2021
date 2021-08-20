import { useEffect } from 'react';

const CounterButton = ({ numberOfClicks, onIncrement }) => {
	useEffect(() => {
		console.log('useEffect callback called!');
	}, [numberOfClicks]);

	return (
		<div>
			<p>You've clicked the button {numberOfClicks} times</p>
			<button onClick={onIncrement}>Click me!</button>
		</div>
	);
}

export default CounterButton;