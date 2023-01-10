import { gql } from '@apollo/client';

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            tournaments {
                _id
                tournamentName
                tournamentDate
                tournamentDescription
                tournamentImage
                course
                tournamentPrice
                link
            }
        }
    }
`