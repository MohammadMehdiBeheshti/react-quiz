import OptionBox from './OptionBox';
import Button from './Button';
import Timer from './Timer';

function Question({ quiz, dispatch, answer }) {
	const { question, options, correctOption, points } = quiz ?? {
		question: null,
		options: [],
		correctOption: null,
		points: 0,
	};

	const hasAnswered = answer !== null;
	const isAnswerRight = answer === correctOption;

	return (
		<section className="w-50">
			<h3 className="text-whiteColor text-1.8 font-fontMedium">{question}</h3>
			<ul className="flex flex-col gap-2 mt-2">
				{options.length !== 0 &&
					options.map((option, i) => (
						<OptionBox
							text={option}
							className={`${i === answer && 'selected'} ${
								hasAnswered
									? i === correctOption
										? 'correct pointer-events-none'
										: 'unselected pointer-events-none'
									: ''
							}`}
							disabled={hasAnswered}
							onClick={() => dispatch({ type: 'newAnswer', payload: i })}
							key={i}
						/>
					))}
			</ul>
			<div className="flex justify-between items-center mt-3">
				<Timer minutes={9} seconds={59} dispatch={dispatch} />
				{hasAnswered && (
					<Button
						onClick={() =>
							dispatch({
								type: 'nextQuestion',
								payload: isAnswerRight ? points : 0,
							})
						}
					>
						Next
					</Button>
				)}
			</div>
		</section>
	);
}

export default Question;
