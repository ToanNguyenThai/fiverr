import './globals.css';
import Homepage from './components/Homepage';
import JobList from './components/JobList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
function App() {
	const [whiteNav, setWhiteNav] = useState(false);

	useScrollPosition(({ prevPos, currPos }) => {
		if (currPos.y > -500)
			setWhiteNav(false)
		else setWhiteNav(true)

	})

	return (

		<div className="App">

			<Routes>

				<Route path="/" element={<Homepage />} />
				<Route path="JobList/:name" element={
					<>
						<Navbar></Navbar>
						<JobList />
					</>
				} >

				</Route>
			</Routes>
			<Footer></Footer>


		</div>
	);
}

export default App;
