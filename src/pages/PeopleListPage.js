import PeopleList from '../PeopleList';
import people from './people';

const PeopleListPage = () => {
	return (
        <PeopleList people={people} />
	);
}

export default PeopleListPage;