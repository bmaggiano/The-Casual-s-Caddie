import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_DISTANCE } from '../utils/mutations';
import Auth from '../utils/auth'


function Input() {

    const [ addDistance ] = useMutation(ADD_DISTANCE)

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

    const handleAddDistance = async(distanceToSave) => {
        const token = Auth.loggedIn() ? Auth.getToken : null;
    
        if (!token) {
          return false;
        }
    
        try {
          const response = await addDistance({
            variables: {
                _id: distanceToSave},
          })
          window.location.reload();
        } catch (err) {
          console.error(err)
        }
      }

    return (
        <>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="num1" className="text-sm font-medium text-gray-700">Shot 1:</label>
                        <input
                            type="number"
                            name="num1"
                            value={numbers.num1}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <br />
                        <label htmlFor="num2" className="text-sm font-medium text-gray-700">Shot 2:</label>
                        <input
                            type="number"
                            name="num2"
                            value={numbers.num2}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                        />
                        <br />
                        <label htmlFor="num3" className="text-sm font-medium text-gray-700">Shot 3:</label>
                        <input
                            type="number"
                            name="num3"
                            value={numbers.num3}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                        />
                        <br />
                        <label htmlFor="num4" className="text-sm font-medium text-gray-700">Shot 4:</label>
                        <input
                            type="number"
                            name="num4"
                            value={numbers.num4}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                        />
                        <br />
                        <label htmlFor="num5" className="text-sm font-medium text-gray-700">Shot 5:</label>
                        <input
                            type="number"
                            name="num5"
                            value={numbers.num5}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                        />
                        <br />
                        <button type="submit"
                            onClick={() => handleAddDistance(result.avg)}
                            className="flex w-full justify-center rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >Submit</button>
                        <br />
                        <p>Minimum: {result.min}</p>
                        <p>Maximum: {result.max}</p>
                        <p>Average: {result.avg}</p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Input
