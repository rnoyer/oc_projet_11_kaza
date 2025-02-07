import "./Card.scss"
import { Link } from "react-router"

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