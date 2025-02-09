import "./Dropdown.scss"

function Dropdown ({title, content}) {
    return (
        <details>
            <summary>{title}</summary>
            {content}
        </details>
    )

}

export default Dropdown