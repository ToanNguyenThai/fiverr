import './globals.css';
import Homepage from './components/Homepage';
import JobList from './components/JobList';

import { WithNavbar } from './RouteTemplate/UserNavbar/WithNavbar';
import { WithoutNavbar } from './RouteTemplate/UserNavbar/WithoutNavbar';
import { Switch, Route, Router } from "react-router-dom";

import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
function App() {
	return (
		<>
			<Router history={history}>
				<Switch>
					<WithoutNavbar path="/" exact Component={Homepage}></WithoutNavbar>
					<WithNavbar path='/JobList/:name' Component={JobList}></WithNavbar>
				</Switch>
			</Router>

		</>




	);
}

export default App;
