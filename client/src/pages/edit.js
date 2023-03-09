import React from 'react'
import Input from '../components/input'
import GoogleInput from '../components/googleInput'
import { useQuery } from '@apollo/client'
import { QUERY_GOOGLE_ME, QUERY_ME } from '../utils/queries'


function Edit() {

  const { data: googleData } = useQuery(QUERY_GOOGLE_ME)
  const { data: meData } = useQuery(QUERY_ME)

  const goog = googleData?.googleMe
  const me = meData?.me

  return (
    <div>
      {me && <Input/>}
      {goog && <GoogleInput/>}
    </div>
  )
}

export default Edit
