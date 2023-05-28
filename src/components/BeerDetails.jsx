
import { useParams } from "react-router-dom"
import Header from "./Header"
import SingleBeer from "./SingleBeer"


function BeerDetails({allBeers}) {
  // Get the params:
  const params = useParams()
  // console.log(params)
  
  // Filter the array to check the beer got from the params. It returns a single element array so we need the first value [0]:
  const singleBeer = allBeers.filter(el => el._id === params.beerId)[0]
  // console.log(singleBeer)

  
  return (
    <div>
        <Header />
        <SingleBeer singleBeer={singleBeer}/>
        
    </div>
  )
}

export default BeerDetails