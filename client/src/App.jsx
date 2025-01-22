import { useState } from 'react';
import Users from './components/users/Users';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Users />
		</div>
	);
};

export default App;
