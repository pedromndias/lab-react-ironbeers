import Header from "./Header"
import SingleBeer from "./SingleBeer"
import { useState, useEffect } from "react"
import axios from "axios"
import { BounceLoader } from "react-spinners"

function RandomBeer() {

  // Create state to store the beers info (starts empty):
  const [singleBeer, setSingleBeer] = useState(null)
  // Create state for the loading process<.
  const [isLoading, setIsLoading] = useState(true)

  // Create the function that gets the info from the API:
  const getData = async () => {
      try {
          const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
          console.log(response.data);
          // Set state with the data and change the isLoading to false:
          setSingleBeer(response.data)
          setIsLoading(false)

      } catch (error) {
          console.log(error)
      }
  }

  // useEffect to execute getData when the component is mounted:
  useEffect(() => {
      getData();
  }, [])

  // Create a check clause so we return a loading spinner
  if (isLoading === true) {
    return (
      <div className="spinner-container">
        <BounceLoader color="blanchedalmond" size={100} />
      </div>
    )
  }
  return (
    <div>
        <Header />
        <SingleBeer singleBeer={singleBeer}/>
        
    </div>
  )
}

export default RandomBeer