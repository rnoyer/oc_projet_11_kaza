import { useEffect, useState } from "react"
import { useParams } from "react-router"
import './Fiche.scss'
import Dropdown from "../components/Dropdown"
import RatingStars from "../components/RatingStars"
import Caroussel from "../components/Caroussel"
import Host from "../components/Host"
import TagContainer from "../components/TagContainer"

function Fiche() {
    const { id } = useParams()
    const [fiche, setFiche] = useState()
    //Gerer la redirection vers page 404 si l'ID n'existe pas (useNavigate (from "react-router"))
    
    useEffect(() => {
        const getFiche = async () => {
           try {
               const response = await fetch(`/logements.json`)
               const data = await response.json()
               setFiche(data.find((element) => element.id === id))
           } catch (error) {
               console.log(error)
           }
        }
        getFiche()
    }, [])

    if(!fiche){
        return null
    }
    return(
        <>
            <Caroussel picturesArray={fiche.pictures } />
            <div className="middle-content">
                <div className="place-infos">
                    <h3>{fiche.title}</h3>
                    <p>{fiche.location}</p>
                    <TagContainer tagsArray={fiche.tags}/>
                </div>
                <div className="host-infos">
                    <RatingStars starNumber={fiche.rating} />
                    <Host name={fiche.host?.name} image={fiche.host?.picture}/>
                </div>
            </div>
            <Dropdown title="Description" content={fiche.description}/>
            <Dropdown title="Equipements" content={<ul>{fiche.equipments?.map(e => <li key={e}>{e}</li>)}</ul>}/>
        </>
    )
}

export default Fiche