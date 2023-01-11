import React, { useState } from 'react'

function Input() {
    const [numbers, setNumbers] = useState({
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
    });
    const [result, setResult] = useState({
        min: 0,
        max: 0,
        avg: 0
    });

    const handleChange = (e) => {
        setNumbers({
            ...numbers,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numArr = Object.values(numbers);
        const min = Math.min(...numArr);
        const max = Math.max(...numArr);
        const sum = numArr.reduce((acc, cur) => acc + parseInt(cur), 0);
        const avg = sum / numArr.length;
        setResult({ min, max, avg });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="num1">Number 1:</label>
                <input
                    type="number"
                    name="num1"
                    value={numbers.num1}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="num2">Number 2:</label>
                <input
                    type="number"
                    name="num2"
                    value={numbers.num2}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="num3">Number 3:</label>
                <input
                    type="number"
                    name="num3"
                    value={numbers.num3}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="num4">Number 4:</label>
                <input
                    type="number"
                    name="num4"
                    value={numbers.num4}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="num5">Number 5:</label>
                <input
                    type="number"
                    name="num5"
                    value={numbers.num5}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
                <br />
                <p>Minimum: {result.min}</p>
                <p>Maximum: {result.max}</p>
                <p>Average: {result.avg}</p>
            </form>
        </>
    );
}

export default Input
