import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Logo from './components/Logo';
import LoadingInd from './components/LoadingInd';
import ErrorInd from './components/ErrorInd';
import GreetingScreen from './components/GreetingScreen';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import FinalResult from './components/FinalResult';

const initialState = {
	questions: [],
	totalScore: 0,
	answer: null,
	status: 'loading',
	index: 0,
	score: 0,
};

const reduce = (state, action) => {
	switch (action.type) {
		case 'dataReceived':
			return {
				...state,
				questions: action.payload.data,
				totalScore: action.payload.totalScore,
				status: 'ready',
			};
		case 'dataFailed':
			return { ...state, status: 'error' };
		case 'start':
			return { ...state, status: 'active' };
		case 'newAnswer':
			return { ...state, answer: action.payload };
		case 'nextQuestion':
			return {
				...state,
				answer: null,
				index: state.index++,
				score: state.score + action.payload,
			};
		case 'showResult':
			return { ...state, status: 'final' };
		default:
			throw new Error('No other actions expected');
	}
};

export default function App() {
	const [{ questions, totalScore, answer, status, index, score }, dispatch] =
		useReducer(reduce, initialState);

	const numOfQuestions = questions.length;

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('http://localhost:4000/questions');
				const data = await response.json();
				const totalScore = data
					.map((quiz) => quiz.points)
					.reduce((acc, curr) => acc + curr);
				dispatch({ type: 'dataReceived', payload: { data, totalScore } });
			} catch (err) {
				dispatch({ type: 'dataFailed' });
			}
		})();
	}, []);

	useEffect(() => {
		if (index === numOfQuestions) dispatch({ type: 'showResult' });
	}, [numOfQuestions, index]);

	return (
		<>
			<Header>
				<Logo />
			</Header>

			<Main>
				{status === 'loading' && <LoadingInd />}
				{status === 'error' && <ErrorInd />}
				{status === 'ready' && (
					<GreetingScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
				)}
				{status === 'active' && (
					<ProgressBar
						totalQ={numOfQuestions}
						totalP={totalScore}
						quizNum={index}
						point={score}
					/>
				)}
				{status === 'active' && (
					<Question
						quiz={questions.at(index)}
						dispatch={dispatch}
						answer={answer}
					/>
				)}
				{status === 'final' && (
					<FinalResult totalScore={totalScore} score={score} />
				)}
			</Main>
		</>
	);
}
