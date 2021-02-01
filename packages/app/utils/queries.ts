import { gql } from "apollo-boost";

export const searchQuery = gql`
    query search{
        titles{
            id name number
            chapters{
                id number name img
                articles{id number name content}
            }
        }
    }
`

export const commentsQuery = gql`
    query commects{
        comments{
            id content createdAt
        }
    }
`
