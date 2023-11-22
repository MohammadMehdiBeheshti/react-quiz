import {useQuizContext} from '../contexts/QuizContext';

function FinalResult() {
	const {score, totalScore} = useQuizContext();

	return (
		<section className="w-50 h-7 bg-blueColor rounded-full flex items-center justify-center">
			<h4 className="text-2.4 text-whiteColor font-fontBold">
				You scored {score} out of {totalScore} points
			</h4>
		</section>
	);
}

export default FinalResult;
