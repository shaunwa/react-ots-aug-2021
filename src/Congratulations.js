import { useEffect } from 'react';

const Congratulations = ({ numberOfClicks, threshold, onHide }) => {
	useEffect(() => {
		return () => console.log('Congratulations component unmounting!');
	}, []);

	return numberOfClicks >= threshold
		? (
			<>
			<h1>Congratulations! You've reached {threshold} clicks</h1>
			<button onClick={onHide}>Hide</button>
			</>
		) : null;
}

export default Congratulations;