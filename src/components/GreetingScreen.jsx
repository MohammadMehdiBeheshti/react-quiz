import {useQuizContext} from '../contexts/QuizContext';

function GreetingScreen() {
	const {dispatch, questions} = useQuizContext();

	return (
		<div className="text-center">
			<h1 className="font-fontBold text-4 text-whiteColor mb-1.2">
				Welcome to The React Quiz!
			</h1>
			<h2 className="font-fontMedium text-2 text-whiteColor mb-2.6">
				{questions.length} questions to test your React mastery
			</h2>
			<button className="btn" onClick={() => dispatch({type: 'start'})}>
				Let&apos;s get started
			</button>
		</div>
	);
}

export default GreetingScreen;
