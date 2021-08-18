import './App.css';
import { useState } from 'react';

function App() {
	const [birthday, setBirthday] = useState('');
	const [luckyNumber, setLuckyNumber] = useState('');
	const [result, setResult] = useState('');

	const checkLuckiness = () => {
		// error check
		if (!birthday) {
			setResult('⚠️ Birthday Invalid');
			return;
		}
		if (!luckyNumber || !Number.isInteger) {
			setResult('⚠️ LuckyNumber Invalid');
			return;
		}

		// Sum of digits
		let sum = 0;
		for (let i = 0; i < birthday.length; ++i) {
			let digit = +birthday[i];
			if (Number.isInteger(digit)) {
				sum += digit;
			}
		}

		console.log(birthday, luckyNumber, sum);

		// if sum of digits is divisible by luckyNumber.
		if (sum % +luckyNumber === 0) {
			setResult('Yessss!!!!! Your Birthday Is Luckyy 😲👀💝');
		} else {
			setResult('Nuuuhhh, Your Birthday Is Not Luckyy 🥺💔');
		}
	};

	return (
		<main>
			<h1>Is your Birthday Lucky??? 🤨 </h1>

			<label htmlFor='date'>Enter your Birthday:</label>
			<input
				onChange={(event) => setBirthday(event.target.value)}
				type='date'
				name='date'
				id='date'
			/>

			<label htmlFor='lucky'>Enter your Lucky Number:</label>
			<input
				onChange={(event) => setLuckyNumber(event.target.value)}
				type='text'
				name='lucky'
				id='lucky'
			/>

			<button onClick={checkLuckiness}>Check</button>

			<div className='result'>{result}</div>
		</main>
	);
}

export default App;
