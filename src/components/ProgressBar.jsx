import {useQuizContext} from '../contexts/QuizContext';
import '../styles/progressbar.css';

function ProgressBar() {
	const {questions, index, totalScore, score} = useQuizContext();

	return (
		<section className="w-50 mb-3">
			<progress
				className="progress"
				max={questions.length}
				value={index}
			></progress>
			<div className="flex justify-between text-whiteColor mt-1">
				<span className="font-fontLight">
					Questions
					<span className="font-fontMedium ml-0.6">
						{index}/{questions.length}
					</span>
				</span>
				<span className="font-fontMedium">
					{score}/{totalScore} points
				</span>
			</div>
		</section>
	);
}

export default ProgressBar;
