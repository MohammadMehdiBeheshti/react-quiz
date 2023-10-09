import '../styles/optionBox.css';

function OptionBox({ text, className, disabled = false, onClick }) {
	return (
		<li className="list-none">
			<button
				className={`option-box ${className}`}
				disabled={disabled}
				onClick={onClick}
			>
				{text}
			</button>
		</li>
	);
}

export default OptionBox;
