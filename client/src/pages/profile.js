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
  const { data: meData } = useQuery(QUERY_ME)
  const { loading, data: googleData } = useQuery(QUERY_GOOGLE_ME)


  if (loading) {
    return <h2>Loading User Data...</h2>
  }

  if (meData && googleData === undefined) {
    return (
      <>
    <Login />
      </>
    )
  }

  const me = meData?.me
  const goog = googleData?.googleMe
  
  return (
    <div>
      <h2 className='text-center mt-4'>Welcome back {goog?.name || me?.username}</h2>
      <br/>
      {/* <UserDistanceTable/> */}
      <hr/>
      <AddClub/>
    </div>
  )
}

export default Profile
