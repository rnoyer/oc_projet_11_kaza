import "./Card.scss"

function Card({cover, title}) {
    return(
        <article className="card">
            <div className="gradient"></div>
            <img src={cover} alt="" />
            <h2>{title}</h2>
        </article>
    )
}

export default Card