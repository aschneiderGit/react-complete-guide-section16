import {useEffect, useRef, useState} from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const enteredNameIsInValid = !enteredNameIsValid && enteredNameIsTouched;
	const formIsValid = enteredNameIsValid;

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameIsTouched(true);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		setEnteredNameIsTouched(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);
		setEnteredName('');
		setEnteredNameIsTouched(false);
	};
	const nameIsInvalid = enteredNameIsInValid;
	const nameInputClasses = nameIsInvalid
		? 'form-control invalid'
		: 'form-control';
	return (
		<form onSubmit={formSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameIsInvalid && <p className="error-text"> name must not be empty</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
