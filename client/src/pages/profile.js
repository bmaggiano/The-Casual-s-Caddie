import React from 'react'
import Input from '../components/input'
import { useQuery } from "@apollo/client"
import { QUERY_ME, QUERY_CLUBS } from "../utils/queries"

const Profile = () => {

  const { loading, data } = useQuery(QUERY_ME)
  // const { loading, data } = useQuery(QUERY_CLUBS)

  if (loading) {
    return <h2>Loading User Data...</h2>
  }
  const meData = data?.me
  
  // if (loading) {
  //   return <h2>LOADING...</h2>
  // }

  // const clubData = data.clubs || []


  // console.log(clubData)
  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome back {meData.username}</h2>
      {/* {clubData.map((club) => {
        return (
          <p>{club.clubName}</p>
        )
      })} */}
      <Input/>
    </div>
  )
}

export default Profile
