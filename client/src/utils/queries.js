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

export const QUERY_GOOGLE_ME = gql`
    {
        googleMe {
            _id
            name
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

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      clubs {
        _id
        clubId
        clubName
        clubAverage
        clubHigh
        clubLow
        dateTested
      }
    }
  }
`;

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