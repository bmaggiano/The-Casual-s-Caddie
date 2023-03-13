import React, { useState } from 'react'
import Auth from '../utils/auth'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_CLUB, ADD_GOOGLE_CLUB } from '../utils/mutations'
import { QUERY_GOOGLE_ME, QUERY_ME } from '../utils/queries'

function AddClub() {
  const [club, setClub] = useState('')
  const { data: googleData } = useQuery(QUERY_GOOGLE_ME)
  const { data: meData } = useQuery(QUERY_ME)
  const [ addClub ] = useMutation(ADD_CLUB)
  const [ addGoogleClub ] = useMutation(ADD_GOOGLE_CLUB)


  const goog = googleData?.googleMe
  const me = meData?.me


  const handleChange = e => {
    if (e.target.name === 'club') {
      setClub(e.target.value)
    }
  }

  const handleAddClub = async(clubToSave) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    if(goog === null) {
      try {
        await addClub({
          variables: {clubName: club},
        })
      } catch (err) {
        console.error(err)
      }
    }

    if(me === null) {
      try {
        await addGoogleClub({
          variables: {clubName: club},
        })
      } catch (err) {
        console.error(err)
      }
    }
    
  }

  return (
    <div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className='contentFont font-bold'>Add clubs to your bag here</h2>
          <form onSubmit={handleAddClub}>
            <label htmlFor="club" className="contentFont text-sm font-medium text-gray-700">Club Name</label>
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
