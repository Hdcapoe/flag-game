export default function SelectCountry({ countries, flagName }) {

    let randNum = Math.floor(Math.random()*countries.length)
    let countryName = countries[randNum]?.name?.common

    if (countryName === flagName) {
        let randNum = Math.floor(Math.random()*countries.length)
        countryName = countries[randNum]?.name?.common
      } else {
        countryName
      }  

  return (
    <div>
        {countryName}    
    </div>
  )
}
