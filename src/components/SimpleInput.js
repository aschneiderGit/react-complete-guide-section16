import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const checkNamevalidity = (value) => value.trim() !== '';

	const {
		value: enteredName,
		hasError: nameInputhasError,
		IsValid: nameInputIsValid,
		valueChangeHandler: nameInputChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetName,
	} = useInput(checkNamevalidity);

	const checkEmailvalidity = (value) => {
		const regMatchemail =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return value.match(regMatchemail);
	};

	const {
		value: enteredEmail,
		IsValid: emailInputIsValid,
		hasError: emailInputhasError,
		valueChangeHandler: emailInputChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmail,
	} = useInput(checkEmailvalidity);

	const formIsValid = nameInputIsValid && emailInputIsValid;

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (!nameInputIsValid && !emailInputIsValid) {
			return;
		}

		console.log(enteredName);
		console.log(enteredEmail);
		resetName();
		resetEmail();
	};

	const nameInputClasses = `form-control ${nameInputhasError && 'invalid'}`;
	const emailInputClasses = `form-control ${emailInputhasError && 'invalid'}`;

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
				{nameInputhasError && (
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
				{emailInputhasError && (
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
