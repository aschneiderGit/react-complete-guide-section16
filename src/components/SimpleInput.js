import {useRef, useState} from 'react';

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

	const checkNameValidity = () => {
		if (nameInputRef.current.value.trim() === '') {
			setEnteredNameIsValid(false);
			return;
		} else {
			setEnteredNameIsValid(true);
		}
	};

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
		checkNameValidity();
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameIsTouched(true);
		checkNameValidity();
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		setEnteredNameIsTouched(true);
		checkNameValidity();

		setEnteredNameIsValid(true);

		console.log(enteredName);
		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);
	};
	const nameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
	const nameInputClasses = nameIsInvalid
		? 'form-control invalid'
		: 'form-control';
	return (
		<form onSubmit={formSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					ref={nameInputRef}
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
				/>
				{nameIsInvalid && <p className="error-text"> name must not be empty</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
