import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { ADD_DISTANCE } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth'


function Input() {

    const [ addDistance ] = useMutation(ADD_DISTANCE)
    const { data } = useQuery(QUERY_ME)
    const { Clubs } = useParams()
    const clubData = data?.me.clubs.find((club) => club._id === Clubs) || []
    const [ showButton, setShowButton ] = useState(false)
    const [ showCongrats, setCongratsButton ] = useState(false)

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


    const handleUpdateClub = async(clubToUpdate) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            await addDistance({
                variables: {
                    _id: clubToUpdate,
                    clubHigh: result.max,
                    clubLow: result.min,
                    clubAverage: result.avg
                }
            })
        } catch (err) {
            console.error(err)
        }
        setShowButton(false)
        setCongratsButton(true)

    }


    const handleSubmit = (e) => {
        
        e.preventDefault();
        const numArr = Object.values(numbers);
        const min = Math.min(...numArr);
        const max = Math.max(...numArr);
        //reducer to find the sum, accumulator inital = 0, current element = cur, parseInt incase its not number
        //iterate through numArr
        const sum = numArr.reduce((acc, cur) => acc + parseInt(cur), 0);
        const avg = sum / numArr.length;
        setResult({ min, max, avg });
        setShowButton(true);
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
    };


    return (
        <>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div>
                        <h2 className='contentFont'>You're currently recalibrating your {clubData.clubName}</h2>
                    </div>
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
                            className="flex w-full justify-center rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >Calculate</button>
                        <br />
                        <p>Club Low: {result.min}</p>
                        <p>Club High: {result.max}</p>
                        <p>Club Average: {result.avg}</p>
                    </form>
                </div>
                {showButton && (
    <button onClick={() => handleUpdateClub(clubData._id)}
        className="flex w-full justify-center rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >Update Club</button>
)}

            </div>
            {showCongrats && (
    <div>
        <br/>
        <h4 className='text-center contentFont'>Your {clubData.clubName} has been updated!</h4>
        <br/>
    <Link to={`/Profile`}
        className="flex w-full justify-center rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >Return To Profile</Link>
        </div>
)}
        </>
    );
}

export default Input
