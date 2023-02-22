import React from 'react'
import Login from '../components/loginForm'
import Input from '../components/input'
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_ME, QUERY_CLUBS } from "../utils/queries"
import Auth from '../utils/auth'
import {useNavigate} from "react-router-dom"
import UserDistanceTable from '../components/userDistanceTable'
import AddClub from '../components/addclub'

const Profile = () => {

  const clubresults = useQuery(QUERY_CLUBS)
  const { loading, data } = useQuery(QUERY_ME)

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
  const meData = data?.me
  
  return (
    <div>
      <h2 className='text-center'>Welcome back {meData.username}</h2>
      <UserDistanceTable/>
      <h2 className='text-center'>Add clubs to your bag</h2>
      <AddClub/>
      <Input/>
    </div>
  )
}

export default Profile
