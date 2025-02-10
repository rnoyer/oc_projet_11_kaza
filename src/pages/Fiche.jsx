import { useEffect, useState } from "react"
import { useParams } from "react-router"
import './Fiche.scss'
import Dropdown from "../components/Dropdown"
import Tag from "../components/Tag"
import RatingStars from "../components/RatingStars"

function Fiche() {
    const { id } = useParams()
    const [fiche, setFiche] = useState({})
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
    
    return(
        <>
            <p>{fiche.cover}</p>
            <h3>{fiche.title}</h3>
            <p>{fiche.location}</p>
            {fiche.tags?.map(e => <Tag tagName={e} key={e}/>)}
            <RatingStars starNumber={fiche.rating} />
            {/* <p>{fiche.host.name}</p>
            <p>{fiche.host.picture}</p> */}

            <Dropdown title="Description" content={fiche.description}/>
            <Dropdown title="Equipements" content={<ul>{fiche.equipments?.map(e => <li key={e}>{e}</li>)}</ul>}/>
        </>
    )
}

export default Fiche