import { useState } from 'react';

/*

<form onsubmit="doSomething()">
	<input type="text" placeholder="Email Address" />
	<input type="text" placeholder="Email Address" />
	<input type="text" placeholder="Email Address" />
	<input type="Submit" value="Submit Information" />
</form>

*/

const FormPage = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const displayData = () => {
		console.log({
			email,
			name,
			password,
		});
		setEmail('');
		setName('');
		setPassword('');
	}
	
	return (
		<div>
			<input
				type="text"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder="Email Address" />
			<input
				type="text"
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder="First and last name" />			
			<input
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder="Password" />			
			<button onClick={displayData}>Submit</button>
		</div>
	);
}

export default FormPage;