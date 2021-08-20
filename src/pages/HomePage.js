import Greeting from '../Greeting';

const HomePage = () => {
	return (
		<>
		<h1>Home</h1>
        <Greeting name="Shaun" numberOfMessages={0} />
		</>
	);
}

export default HomePage;