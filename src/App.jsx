import {QuizProvider} from './contexts/QuizContext';

import Header from './components/Header';
import Main from './components/Main';
import Logo from './components/Logo';

export default function App() {
	return (
		<QuizProvider>
			<Header>
				<Logo />
			</Header>
			<Main />
		</QuizProvider>
	);
}
