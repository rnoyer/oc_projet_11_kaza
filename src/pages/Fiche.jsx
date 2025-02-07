import { useEffect, useState } from "react"
import { useParams } from "react-router"
import './Fiche.scss'

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
            <h1>Fiche appartement</h1>
            <p>{fiche.title}</p>
            <p>{fiche.cover}</p>
            {/* <p>{fiche.pictures}</p> */}
            <p>{fiche.description}</p>
            {/* <p>{fiche.host}</p> */}
            <p>{fiche.rating}</p>
            <p>{fiche.location}</p>
            {/* <p>{fiche.equipements}</p>
            <p>{fiche.tags}</p> */}
        </>
    )
}

export default Fiche