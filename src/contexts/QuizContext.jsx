import {createContext, useContext, useEffect, useReducer} from 'react';

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
			return {...state, status: 'error'};
		case 'start':
			return {...state, status: 'active'};
		case 'newAnswer':
			return {...state, answer: action.payload};
		case 'nextQuestion':
			return {
				...state,
				answer: null,
				index: state.index++,
				score: state.score + action.payload,
			};
		case 'showResult':
			return {...state, status: 'final'};
		default:
			throw new Error('No other actions expected');
	}
};

const QuizContext = createContext();

const useQuizContext = () => {
	const context = useContext(QuizContext);
	return context;
};

function QuizProvider({children}) {
	const [state, dispatch] = useReducer(reduce, initialState);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('http://localhost:4000/questions');
				const data = await response.json();
				const totalScore = data
					.map((quiz) => quiz.points)
					.reduce((acc, curr) => acc + curr);
				dispatch({type: 'dataReceived', payload: {data, totalScore}});
			} catch (err) {
				dispatch({type: 'dataFailed'});
			}
		})();
	}, []);

	useEffect(() => {
		if (state.index === state.questions.length) dispatch({type: 'showResult'});
	}, [state.questions.length, state.index]);

	return (
		<QuizContext.Provider value={{...state, dispatch}}>
			{children}
		</QuizContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export {QuizProvider, useQuizContext};
