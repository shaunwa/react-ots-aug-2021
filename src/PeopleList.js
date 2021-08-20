import styled from 'styled-components';
import PeopleListItem from './PeopleListItem';
import './PeopleList.css';

/*
	<p style="color: red; font-size: 96px">Big Red Text!</p>
*/

const Wrapper = styled.div`
	border: 2px solid white;
	padding: 32px;
`;

const PeopleList = ({ people }) => (
	<Wrapper>
		{people.map(person => (
			<PeopleListItem key={person.id} person={person} />
		))}
	</Wrapper>
);

export default PeopleList;