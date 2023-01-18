import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            clubs {
                    _id
                    clubName
                    clubAverage
                    clubHigh
                    clubLow
                    dateTested
                }
        }
    }
`

export const QUERY_CLUBS = gql`
    {
        clubs {
            _id
            clubName
            clubAverage
            clubHigh
            clubLow
            dateTested
        }
    }
`