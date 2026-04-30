export default function Article({post}){
    return (
        <article>
            <h3>{post.title}</h3>
            <small>{post.date}. {post.minutes} minutes read</small>
            <p>{post.preview}</p>
        </article>
    )
}