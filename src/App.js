import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</Container>
	);
}

export default App;
