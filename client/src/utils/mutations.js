import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String, $email: String, $password: String) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
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
}
`;

export const LOGIN_USER = gql`
    mutation loginUser( $email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
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
}
`;

export const GOOGLE_LOGIN = gql`
  mutation loginWithGoogle($idToken: String!) {
    loginWithGoogle(idToken: $idToken) {
      token
      user { 
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
  }
`;


export const ADD_CLUB = gql`
    mutation addClub($clubName: String) {
        addClub(clubName: $clubName){
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
`

export const REMOVE_CLUB = gql`
    mutation removeClub($_id: ID) {
        removeClub(_id: $_id){
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
`

export const ADD_DISTANCE = gql`
    mutation addDistance($_id: ID, $clubAverage: Float, $clubLow: Float, $clubHigh: Float, $dateTested: String, $clubName: String) {
        addDistance(_id: $_id, clubAverage: $clubAverage, clubLow: $clubLow, clubHigh: $clubHigh, dateTested: $dateTested, clubName: $clubName) {
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
`