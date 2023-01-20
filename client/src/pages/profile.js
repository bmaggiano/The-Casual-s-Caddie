import React from 'react'
import Login from '../components/loginForm'
import Input from '../components/input'
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_ME, QUERY_CLUBS } from "../utils/queries"
import { ADD_CLUB, REMOVE_CLUB } from '../utils/mutations'
import Auth from '../utils/auth'
import {useNavigate} from "react-router-dom"

const Profile = () => {

  const clubresults = useQuery(QUERY_CLUBS)
  const { loading, data } = useQuery(QUERY_ME)
  const [ removeClub ] = useMutation(REMOVE_CLUB)
  const [ addClub, { error } ] = useMutation(ADD_CLUB)

  const navigate = useNavigate()
  const refreshPage = () => {
    navigate(0)
  }

  if (loading) {
    return <h2>Loading User Data...</h2>
  }

  if (data === undefined) {
    return (
      <>
    <Login />
      </>
    )
  }

  
  const clubData = clubresults.data?.clubs
  const myClubs = data?.me.clubs
  // const filteredClubs = clubData.filter((club) => !myClubs.includes(club))
  console.log(myClubs)
  const meData = data?.me
  // console.log(filteredClubs)
  
  const handleAddClub = async(clubToSave) => {
    const token = Auth.loggedIn() ? Auth.getToken : null;

    if (!token) {
      return false;
    }

    try {
      const response = await addClub({
        variables: {_id: clubToSave},
      })
      // refreshPage()
    } catch (err) {
      console.error(err)
    }
  }

  const handleRemoveClub = async(clubToRemove) => {
    const token = Auth.loggedIn() ? Auth.getToken : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeClub({
        variables: {_id: clubToRemove},
      })
      // refreshPage()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h2 className='text-center'>Welcome back {meData.username}</h2>
      <h2 className='text-center'>{meData.clubs.length 
      ? `you currently have ${meData.clubs.length} ${meData.clubs.length === 1 ? 'club' : 'clubs'} in your bag`
      : `You have no clubs in your bag`}</h2>
            {meData.clubs.map((bag) => {
        return (
          <div className='justify-center flex'>
          <button 
          onClick={() => handleRemoveClub(bag._id)}
          className="mx-2 rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
           key={bag._id}>{bag.clubName} {bag.clubAverage}</button>
           </div>
        )
      })}
      {/* TEST FLITER */}
        {/* <div>
        {clubData.filter(club => !meData.clubs.includes(club.clubName)).map(filteredName => (
          <li>
            {filteredName.clubName}
          </li>
        ))}
      </div> */}
      <br/>
      <h2 className='text-center'>Click to add clubs to your bag</h2>
      {/* {clubData.map((club) => {
        return (
          <div className='justify-center flex'>
          <button 
          onClick={() => handleAddClub(club._id)}
          className="mx-2 rounded-md border border-transparent bg-green-700 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
           key={club._id}>{club.clubName} {club.clubAverage}</button>
           </div>
        )
      })} */}
      <Input/>
    </div>
  )
}

export default Profile
