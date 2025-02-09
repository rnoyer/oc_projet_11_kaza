import './Apropos.scss'
import { useState, useEffect } from 'react'
import Hero from "../components/Hero"
import Dropdown from '../components/Dropdown'

function Apropos() {
    const [dropdownData, setDropdownData] = useState()

    useEffect( () => {
        const getDropdownData = async () => {
            try {
                const response = await fetch("/apropos.json")
                const data = await response.json()
                setDropdownData(data)
            } catch (error) {
                console.log(error)
            }
        }
        getDropdownData()
    }, [])

    return(
        <>
            <Hero heroImage={"../src/assets/apropos-bg.png"} isDark={false} />
            {dropdownData?.map( element => 
                <Dropdown key={element.title} title={element.title} content={element.content} />
            )}
        </>
    )
}

export default Apropos