import {useQuizContext} from '../contexts/QuizContext';

import LoadingInd from './LoadingInd';
import ErrorInd from './ErrorInd';
import GreetingScreen from './GreetingScreen';
import Question from './Question';
import ProgressBar from './ProgressBar';
import FinalResult from './FinalResult';

function Main() {
	const {status} = useQuizContext();

	return (
		<main className="flex flex-col justify-center items-center">
			{status === 'loading' && <LoadingInd />}
			{status === 'error' && <ErrorInd />}
			{status === 'ready' && <GreetingScreen />}
			{status === 'active' && <ProgressBar />}
			{status === 'active' && <Question />}
			{status === 'final' && <FinalResult />}
		</main>
	);
}

export default Main;
