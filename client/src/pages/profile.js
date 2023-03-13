import React from 'react'
import Login from '../components/loginForm'
import { useQuery } from "@apollo/client"
import { QUERY_ME, QUERY_GOOGLE_ME } from "../utils/queries"
import UserDistanceTable from '../components/userDistanceTable'
import GoogleUserDistanceTable from '../components/googleUserDistanceTable'
import AddClub from '../components/addclub'

const Profile = () => {

  const { data: meData } = useQuery(QUERY_ME)
  const { loading, data: googleData } = useQuery(QUERY_GOOGLE_ME)


  if (loading) {
    return <h2 className='contentFont text-center mt-4'>Loading User Data...</h2>
  }

  const me = meData?.me
  const goog = googleData?.googleMe
  
  return (
    <div>
      {!meData && !googleData ? (
        <Login />
      ) : (
        goog ? (
          <>
          <h2 className='contentFont text-center mt-4'>Welcome back {goog?.name || me?.username}!</h2>
          <br/>
          <GoogleUserDistanceTable />
          <hr/>
          <AddClub/>
          <br/>
          <br/>
          </>
        ) : (
          me && 
          <>
          <h2 className='contentFont font-bold text-center mt-4'>Welcome back {goog?.name || me?.username}!</h2>
          <br/>
          <UserDistanceTable />
          <hr/>
          <AddClub/>
          <br/>
          <br/>
          </>
        )
      )}
    
    </div>
  )
}

export default Profile
