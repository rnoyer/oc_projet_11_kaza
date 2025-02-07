import './Gallery.scss'
import Card from './Card'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Gallery() {
    const [logements, setLogements] = useState([])

    useEffect(() => {
         const getLogements = async () => {
            try {
                const response = await fetch(`/logements.json`)
                const data = await response.json()
                setLogements(data)

            } catch (error) {
                console.log(error)
            }
         }
         getLogements()
     }, [])

    return (
        <main className='homepage'>
            {logements.map(logement => 
            <Link to={`fiche/${logement.id}`} key={logement.id} >
                <Card 
                cover={logement.cover}
                title={logement.title} 
                />
            </Link>
            )}
        </main>
    )
}

export default Gallery