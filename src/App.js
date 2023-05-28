import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import CreateBeer from './components/CreateBeer';
import BeerDetails from './components/BeerDetails';
import { useEffect, useState } from "react"
import axios from "axios"
import { BounceLoader } from "react-spinners"

function App() {

  // Create state to store the beers info (starts empty):
  const [allBeers, setAllBeers] = useState(null)
  // Create state for the loading process:
  const [isLoading, setIsLoading] = useState(true)

  // Create the function that gets the info from the API:
  const getData = async () => {
      try {
          const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
          // console.log(response.data);
          // Set state with the data and change the isLoading to false:
          setAllBeers(response.data)
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
    <div className="App">      
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/beers" element={<Beers allBeers={allBeers}/>}/>
        <Route path="/random-beer" element={<RandomBeer />}/>
        <Route path="/new-beer" element={<CreateBeer />}/>
        <Route path="/beers/:beerId" element={<BeerDetails allBeers={allBeers}/>}/>
      </Routes>
    </div>
  );
}

export default App;
