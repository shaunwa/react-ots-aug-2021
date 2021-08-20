const Greeting = ({ name, numberOfMessages }) => {
	let isMorning = (new Date()).getHours() < 12;

	if (!name) {
		return null;
	}

	return isMorning
		? (
			<>
				<h3>Good morning {name}!</h3>
				{numberOfMessages > 0 && <p>You have {numberOfMessages} new messages</p>}
			</>
		) : (
			<>
				<h3>Good evening {name}!</h3>
				{numberOfMessages > 0 && <p>You have {numberOfMessages} new messages</p>}
			</>
		);
}

export default Greeting;