import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const checkNamevalidity = (value) => value.trim() !== '';
	const {
		value: enteredFName,
		IsValid: fNameInputIsValid,
		hasError: fNameInputhasError,
		valueChangeHandler: fNameInputChangeHandler,
		inputBlurHandler: fNameInputBlurHandler,
		reset: resetFName,
	} = useInput(checkNamevalidity);

	const {
		value: enteredLName,
		IsValid: lNameInputIsValid,
		hasError: lNameInputhasError,
		valueChangeHandler: lNameInputChangeHandler,
		inputBlurHandler: lNameInputBlurHandler,
		reset: resetLName,
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

	const formIsValid =
		emailInputIsValid && lNameInputIsValid && fNameInputIsValid;

	const submitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}
		console.log(enteredFName);
		console.log(enteredLName);
		console.log(enteredEmail);
		resetFName();
		resetLName();
		resetEmail();
	};

	const fNameInputClasses = `form-control ${fNameInputhasError && 'invalid'}`;
	const lNameInputClasses = `form-control ${lNameInputhasError && 'invalid'}`;
	const emailInputClasses = `form-control ${emailInputhasError && 'invalid'}`;

	return (
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={fNameInputClasses}>
					<label htmlFor="first_name">First Name</label>
					<input
						type="text"
						id="first_name"
						onBlur={fNameInputBlurHandler}
						onChange={fNameInputChangeHandler}
						value={enteredFName}
					/>
				</div>
				<div className={lNameInputClasses}>
					<label htmlFor="last_name">Last Name</label>
					<input
						type="text"
						id="last_name"
						onBlur={lNameInputBlurHandler}
						onChange={lNameInputChangeHandler}
						value={enteredLName}
					/>
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					type="text"
					id="email"
					onBlur={emailInputBlurHandler}
					onChange={emailInputChangeHandler}
					value={enteredEmail}
				/>
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
