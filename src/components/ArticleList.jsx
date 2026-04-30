import Article from "./Article"

export default function ArticleList({posts}){

    return(
        <ul> 
            {posts.map(post => (
                <li key={post.id}><Article post = {post}/></li>
            ))}
        </ul>
    )

}