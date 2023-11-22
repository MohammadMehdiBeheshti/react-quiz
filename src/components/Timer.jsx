import {useEffect, useState} from 'react';
import {useQuizContext} from '../contexts/QuizContext';
import '../styles/timer.css';

function Timer({minutes = 0, seconds = 59}) {
	const {dispatch} = useQuizContext();

	const [time, setTime] = useState('00:00');

	useEffect(() => {
		let [min, sec] = [minutes, seconds];
		const timeOut = () => {
			dispatch({type: 'showResult'});
		};

		const timer = setInterval(() => {
			sec--;
			if (min !== 0 && sec === 0) {
				sec = 60;
				min--;
			}
			if (min === 0 && sec === 0) {
				timeOut();
				clearInterval(timer);
			}
			setTime(
				`${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
			);
		}, 1000);

		return () => clearInterval(timer);
	}, [minutes, seconds, dispatch]);

	return <div className="timer">{time}</div>;
}

export default Timer;
