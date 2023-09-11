import useCounter from '../hooks/useCounter';

const Counter = () => {
    const { count, increment, decrement } = useCounter(0);

    return (
        <>
            <h1>count is - ( {count} )</h1>
            <div className="card">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    );
};

export default Counter;
