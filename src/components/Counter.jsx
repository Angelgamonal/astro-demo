import { useState } from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<button
				className="bg-slate-600 p-2"
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				+
			</button>
			<span className=" p-2">{counter}</span>
			<button
				className="bg-slate-600 p-2"
				onClick={() => setCounter(counter - 1)}
			>
				-
			</button>
		</>
	);
};
