import React from 'react'
import Login from '../components/loginForm'
import Input from '../components/input'
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_ME, QUERY_CLUBS, QUERY_GOOGLE_ME } from "../utils/queries"
import Auth from '../utils/auth'
import {useNavigate} from "react-router-dom"
import UserDistanceTable from '../components/userDistanceTable'
import AddClub from '../components/addclub'

const Profile = () => {

  const clubresults = useQuery(QUERY_CLUBS)
  // const { loading, data } = useQuery(QUERY_ME)
  const { loading, data } = useQuery(QUERY_GOOGLE_ME)

console.log(data)


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

  const meData = data?.googleMe
  // const googleDataMe = googleData?.me
  
  return (
    <div>
      <h2 className='text-center mt-4'>Welcome back {meData.name}</h2>
      <br/>
      <UserDistanceTable/>
      <hr/>
      <AddClub/>
    </div>
  )
}

export default Profile
