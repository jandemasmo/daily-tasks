
export function TaskCard({title, body, id}){

    return (
    <div className="task--card" key={id}>
            <div className="task--content">
                <h2 className="header--title">{title}</h2>
                <p className="text">{body}</p>
            </div>
        </div>
    )
}