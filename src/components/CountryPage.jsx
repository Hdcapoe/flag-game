import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



function CountryPage() {

    let param = useParams();
    let [country, setCountry] = useState({})
    
    // "https://restcountries.com/v3.1/all?fields=name,flags"
    // https://restcountries.com/v3.1/name/{name}

    async function getData() {
        try {
            let response = await fetch(`https://restcountries.com/v3.1/name/${param}`)
            let data = await response.json()
            console.log(data)
            setCountry(data)
        } catch (error) {
            console.log(data)
        }
    }

    useEffect(() => {getData()}, [])


    return (
        <div>
            Country Page
        </div>
    );
}

export default CountryPage;