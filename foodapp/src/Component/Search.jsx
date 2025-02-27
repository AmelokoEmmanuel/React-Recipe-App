import { useEffect, useState } from "react"
import styles from "../search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch"

const API_KEY = "e6813dea67484b4e99a11f9c0f6d71f9"
export default function({foodData, setfoodData}){
    const [query, setQuery] = useState("pizza")

    //Syntax of the useEffect Hook
    useEffect(() => {
        async function fectFood(){
            const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)

            const data= await res.json()

            console.log(data.results)
            setfoodData(data.results)
            
        }

        fectFood()
    }, [query])
    return(
        <div className={styles.searchContainer}>
            <input className={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"/>
        </div>
    )
}