import {useState} from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
	const enteredNameIsValid = enteredName.trim() !== '';
	const enteredNameIsInValid = !enteredNameIsValid && enteredNameIsTouched;

	const regMatchemail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
	const enteredEmailIsValid = enteredEmail.match(regMatchemail);
	const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailIsTouched;

	const formIsValid = enteredNameIsValid && enteredEmailIsValid;

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const nameInputBlurHandler = (event) => {
		setEnteredNameIsTouched(true);
	};

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};
	const emailInputBlurHandler = (event) => {
		setEnteredEmailIsTouched(true);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		setEnteredNameIsTouched(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);
		console.log(enteredEmail);
		setEnteredName('');
		setEnteredNameIsTouched(false);
		setEnteredEmail('');
		setEnteredEmailIsTouched(false);
	};

	const nameInputClasses = `form-control ${enteredNameIsInValid && 'invalid'}`;
	const emailInputClasses = `form-control ${
		enteredEmailIsInValid && 'invalid'
	}`;

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
				{enteredNameIsInValid && (
					<p className="error-text"> name must not be empty</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<input
					type="email"
					id="email"
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{enteredEmailIsInValid && (
					<p className="error-text"> email is not valid</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
