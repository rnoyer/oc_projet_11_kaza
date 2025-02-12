import "./Dropdown.scss"

function Dropdown ({title, content}) {
    return (
        <details>
            <summary>{title}</summary>
            <div className="detail-content">{content}</div>
        </details>
    )

}

export default Dropdown