import Choices from "./Choices";
import { useEffect, useState } from "react";
import SelectCountry from "./SelectCountry";
import { Link } from "react-router-dom";
import EndPage from "./EndPage";



function HomePage(props) {
            
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(false)
  const [wrongAns1, setWrongAns1] = useState("")
  const [wrongAns2, setWrongAns2] = useState("")
  const [imgSrc, setImgSrc] = useState("")
  const [flagName, setFlagName] = useState("")
  const [alt, setAlt] = useState("")
  const [showStart, setShowStart] = useState(true);
  let [totalCount, setTotalCount] = useState(1)
  let [correctCount, setCorrectCount] = useState(0)
 
  async function getData() {
    try {
      let response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
      let data = await response.json();
      console.log(data[0])
      setCountries(data);   
    } catch (error) {
      console.log(error)
    }   
  }

  useEffect(() => {
    getData()
  }, [])

function checkAnswer(e) {
  if (selected === true) {
    return
  }
  setSelected(true)
  if (e.target.innerText === flagName) {
    alert("Correct")
    setCorrectCount(correctCount+=1)
    setTotalCount(totalCount+=1)
  }
  else{
    alert(`Wrong! The right answer is ${flagName}`)
    setTotalCount(totalCount+=1)
  }
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

let choices=[flagName,wrongAns1,wrongAns2]

function newQuestion() {
  setSelected(false)
  setShowStart(false)
  let randNum = Math.floor(Math.random()*countries.length)
  setFlagName(countries[randNum]?.name?.common)
  setImgSrc(countries[randNum]?.flags?.png)
  setAlt(countries[randNum]?.flags?.alt)
  setWrongAns1(<SelectCountry countries = {countries} flagName = {flagName}/>)
  setWrongAns2(<SelectCountry countries = {countries} flagName = {flagName}/>)
  shuffleArray(choices)
}

  return (
  <div className="homepage">
    { showStart && <button onClick={newQuestion}>Start Game</button>}
    { imgSrc && 
      <div>
      <img src={`${imgSrc}`} alt="" className="flag"/>
      <br /> <br />
      {choices.map((country, index) => (
        
          <Choices country={country} checkAnswer = {checkAnswer} key={index}/>
        
      ))}
      {selected && 
        <div>
            { totalCount <= 15 ?  <button onClick={()=>{newQuestion()}}>Next</button> : <button>End</button>}
        <h2>{alt}</h2>
        </div>
      }

    <h2>{`Score: ${correctCount}`}</h2>
    <h2>{`${totalCount}/15`}</h2>
      </div>
    }
        </div>
    );
}

export default HomePage;