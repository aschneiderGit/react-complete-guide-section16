import {useState} from 'react';

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [IsTouched, setIsTouched] = useState(false);

	const IsValid = validateValue(enteredValue);
	const hasError = !IsValid && IsTouched;

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};
	const inputBlurHandler = (event) => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue('');
		setIsTouched(false);
	};
	return {
		value: enteredValue,
		IsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
