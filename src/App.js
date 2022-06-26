import './globals.css';
import Homepage from './components/User/Homepage';
import JobList from './components/User/JobList';
import Job from './components/User/Job';
import JobDetails from './components/User/JobDetails';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Profile from './components/User/Profile';
import Admin from './components/Admin';
import AddAdmin from './components/Admin/AddAdmin/';
import UserList from './components/Admin/UserList';
import UserDetails from './components/Admin/UserDetails/';
import EditUser from './components/Admin/EditUser';
import { WithNavbar } from './RouteTemplate/UserNavbar/WithNavbar';
import { WithoutNavbar } from './RouteTemplate/UserNavbar/WithoutNavbar';
import { Nothing } from './RouteTemplate/UserNavbar/Nothing';
import { SideAndHeader } from './RouteTemplate/Admin/SideAndHeader';
import { Switch, Router } from "react-router-dom";

import { createBrowserHistory } from 'history'


export const history = createBrowserHistory()
function App() {
	return (
		<>
			<Router history={history}>
				<Switch>
					<WithoutNavbar path="/" exact Component={Homepage}></WithoutNavbar>
					<WithNavbar path='/JobList/:name' Component={JobList}></WithNavbar>
					<WithNavbar path='/Job/:name' Component={Job}></WithNavbar>
					<WithNavbar path='/JobDetails/:name/:id' Component={JobDetails}></WithNavbar>
					<Nothing path="/Login" exact Component={Login}></Nothing>
					<Nothing path="/SignUp" exact Component={SignUp}></Nothing>
					<WithNavbar path='/Profile' Component={Profile}></WithNavbar>
					<Nothing path='/Admin' Component={Admin}></Nothing>
					<SideAndHeader path='/AddAdmin' Component={AddAdmin}></SideAndHeader>
					<SideAndHeader path='/UserList' Component={UserList}></SideAndHeader>
					<SideAndHeader path='/UserDetails/:name/:id' Component={UserDetails}></SideAndHeader>
					<SideAndHeader path='/EditUser/:name/:id' Component={EditUser}></SideAndHeader>
				</Switch>
			</Router>

		</>




	);
}

export default App;
