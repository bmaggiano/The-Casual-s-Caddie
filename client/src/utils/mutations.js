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
    mutation addClub($_id: ID) {
        addClub(_id: $_id){
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

export const REMOVE_CLUB = gql`
    mutation removeClub($_id: ID) {
        removeClub(_id: $_id){
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

export const ADD_DISTANCE = gql`
    mutation addDistance($_id: ID, $clubAverage: Int) {
        addDistance(_id: $_id, clubAverage: $clubAverage) {
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