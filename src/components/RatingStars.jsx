import "./RatingStars.scss"
import Star from "./Star"

function RatingStars ({starNumber}) {
    const starsArray = () => {
        const tempArray = []
        for (let index = 0; index < 5; index++) {
            if(index < starNumber) {
                tempArray.push({"key": index, "value": true})
            } else {
                tempArray.push({"key": index, "value": false})
            }
        }
        return tempArray
    }

    return (
        <div className="rating">{starsArray().map(e => <Star isRed={e.value} key={e.key}/>)}</div>
    )
}

export default RatingStars
