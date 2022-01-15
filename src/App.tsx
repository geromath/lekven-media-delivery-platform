import './styles/styles.css';
import { Login } from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';
import React, { useState } from 'react';

function App() {

	const [ login, setLogin ] = useState(false);

  return (
	<>
    { !login ?
		<div>
	<Login setLogin={setLogin}/>
		</div>
	: <Router>
		<Routes>
			<Route path="/" element={<Dashboard/>} />
		</Routes>
	</Router> }
	</>
  );
}

export default App;
