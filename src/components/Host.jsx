import "./Host.scss"

function Host ({name, image}) {
    return (
        <div className="host">
            <p>{name}</p>
            <img src={image} alt="Host picture" />
        </div>
    )
}

export default Host