import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import CounterButtonPage from './pages/CounterButtonPage';
import PeopleListPage from './pages/PeopleListPage';
import PersonDetailPage from './pages/PersonDetailPage';
import FormPage from './pages/FormPage';
import './App.css';

function App() {
	return (
		<Router>
			<NavBar />
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/counter">
				<CounterButtonPage />
			</Route>
			<Route path="/people" exact>
				<PeopleListPage />
			</Route>
			<Route path="/people/:personId">
				<PersonDetailPage />
			</Route>
			<Route path="/form">
				<FormPage />
			</Route>
		</Router>
	);
}

export default App;
