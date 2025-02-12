import "./Caroussel.scss"
import { useState } from "react"

function Caroussel ({picturesArray}) {
    const [actualIndex, setActualIndex] = useState(0)
    const indexMax = picturesArray?.length - 1
    
    function previousPicture(){
        actualIndex === 0 ? setActualIndex( i => i = indexMax) : setActualIndex( actualIndex - 1)
    }

    function nextPicture(){
        actualIndex === indexMax ? setActualIndex( i => i = 0) : setActualIndex( actualIndex + 1)
    }
    
    return (
        <div className="caroussel" >
            <img src={picturesArray[actualIndex]} />
            {indexMax > 0 && 
                <div className="controls">
                    <button onClick={previousPicture} className="before">
                        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.51 2.75064L10.74 0.98064L0.83995 10.8806L10.7399 20.7806L12.5099 19.0106L4.37995 10.8806L12.51 2.75064Z" fill="white"/>
                        </svg>
                    </button>
                    <p>{actualIndex + 1}/{indexMax + 1}</p>
                    <button onClick={nextPicture} className="after">
                        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.48999 19.0106L2.25999 20.7806L12.16 10.8806L2.25999 0.980591L0.48999 2.75059L8.61999 10.8806L0.48999 19.0106Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            }
        </div>
    )
}

export default Caroussel
