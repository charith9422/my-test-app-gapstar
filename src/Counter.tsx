import React from "react";
import "./styles/Counter.scss";

export interface ICounterProps {}
export const INITIAL_COUNT = 0;

const Counter: React.FC<React.PropsWithChildren<ICounterProps>> = ({}) => {
	const [count, setCount] = React.useState<number>(INITIAL_COUNT);

	//Increase count handler
	const increase = () => {
		if (count < 10) {
			setCount((count) => count + 1);
		} else {
			alert(`Count can't be more than 10`);
		}
	};

	//Decrease count handler
	const decrease = () => {
		if (count > 0) {
			setCount((count) => count - 1);
		} else {
			alert("Count can't be less than 0");
		}
	};

	//Reset count handler
	const reset = () => {
		setCount(INITIAL_COUNT);
	};

	return (
		<React.Fragment>
			<div className="counter__wrapper">
				<p>Count: {count}</p>
				<section className="counter__actions__wrapper">
					<button onClick={increase} className="btn btn-primary">
						Increase
					</button>
					<button onClick={decrease} className="btn btn-secondary">
						Decrease
					</button>
					<button onClick={reset} className="btn btn-other">
						Reset
					</button>
				</section>
			</div>
		</React.Fragment>
	);
};

export default Counter;
