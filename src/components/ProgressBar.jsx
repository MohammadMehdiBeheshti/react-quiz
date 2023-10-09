import '../styles/progressbar.css';

function ProgressBar({ totalQ, quizNum, totalP, point }) {
	return (
		<section className="w-50 mb-3">
			<progress className="progress" max={totalQ} value={quizNum}></progress>
			<div className="flex justify-between text-whiteColor mt-1">
				<span className="font-fontLight">
					Questions
					<span className="font-fontMedium ml-0.6">
						{quizNum}/{totalQ}
					</span>
				</span>
				<span className="font-fontMedium">
					{point}/{totalP} points
				</span>
			</div>
		</section>
	);
}

export default ProgressBar;
