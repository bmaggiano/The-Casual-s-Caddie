import React, { useState } from 'react'
import Auth from '../utils/auth'
import { useMutation } from '@apollo/client'
import { ADD_CLUB } from '../utils/mutations'

function AddClub() {
  const [club, setClub] = useState('')
  const [ addClub, { error } ] = useMutation(ADD_CLUB)

  const handleChange = e => {
    if (e.target.name === 'club') {
      setClub(e.target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleAddClub = async(clubToSave) => {
    const token = Auth.loggedIn() ? Auth.getToken : null;

    if (!token) {
      return false;
    }

    try {
      const response = await addClub({
        variables: {clubName: club},
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2>Add clubs to your bag here</h2>
          <form onSubmit={handleAddClub}>
            <label htmlFor="club" className="text-sm font-medium text-gray-700">Club Name</label>
            <input
              type="text"
              name="club"
              value={club}
              onChange={handleChange}
              className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            <button 
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >Add Club</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddClub
