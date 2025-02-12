import "./TagContainer.scss"
import Tag from "../components/Tag"

function TagContainer ({tagsArray}) {
    
    return (
        <div className="tag-array">
            {tagsArray.map(e => <Tag tagName={e} key={e}/>)}
        </div>
    )
}

export default TagContainer