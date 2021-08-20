import { useParams } from 'react-router-dom';
import people from './people';

const PersonDetailPage = () => {
	const { personId } = useParams();

	const selectedPerson = people.find(person => person.id === personId);

	return selectedPerson ? (
		<>
		<h1>{selectedPerson.name}</h1>
		<p>Age: {selectedPerson.age}</p>
		<p>Hair Color: {selectedPerson.hairColor}</p>
		</>
	) : (
		<p>Couldn't find that person!</p>
	);
}

export default PersonDetailPage;