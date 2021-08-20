import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/counter">
						Counter Button
					</Link>
				</li>
				<li>
					<Link to="/people">
						People
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;