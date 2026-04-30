export default function Article({post : {title,date,minutes,preview}}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}. {minutes} minutes read</small>
            <p>{preview}</p>
        </article>
    )
}