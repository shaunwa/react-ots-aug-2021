import { Link } from 'react-router-dom';

const PeopleListItem = ({ person }) => (
	<Link to={`/people/${person.id}`}>
		<div className="list-item-container">
			<h3>{person.name}</h3>
			<p>Age: {person.age}</p>
			<p>Hair Color: {person.hairColor}</p>
		</div>
	</Link>
);

export default PeopleListItem;