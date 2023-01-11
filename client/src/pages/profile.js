import React from 'react'
import Input from '../components/input'
import { useQuery } from "@apollo/client"
import { QUERY_CLUBS } from '../utils/queries'

function Profile() {

  const { loading, data } = useQuery(QUERY_CLUBS)

  if (loading) {
    return <h2>LOADING...</h2>
  }

  const clubData = data.clubs || []


  console.log(clubData)
  return (
    <div>
      <h1>Profile</h1>
      {clubData.map((club) => {
        return (
          <p>{club.clubName}</p>
        )
      })}
      <Input/>
    </div>
  )
}

export default Profile
