import { gql } from "apollo-boost";

// TODO: deprecate
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

export const commentsQuery = `
    query commects{
        comments{
            id content createdAt
        }
    }
`
export const searchTitleQuery = `query titleSearch($text: String){
    titles(where:{name_contains:$text}){
        id name number chapters{id name number articles{id number name content}}
    }
}`
export const searchChapterQuery = `query chapterSearch($text: String){
    chapters(where:{name_contains:$text}){
        id name number articles{id name number content} title{id name number}
    }
}`
export const searchArticleQuery = `query articleSearch($text: String){
    articles(where:{OR:[{name_contains:$text},{content_contains:$text}]}){
        id name number content chapter{id name number title{id name number}}
    }
}`

export const createCommentMutation = `
    mutation createComment($comment: String){
        createComment(data:{content:$comment}){id}
    }
`
export const newsQuery = gql`
    query news{ posts{id url image title content} }
`
