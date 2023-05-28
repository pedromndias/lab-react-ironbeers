import Header from "./Header"
import { useState } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners"
import { useNavigate } from "react-router-dom";

function CreateBeer() {
  // Invoke useNavigate():
  const navigate = useNavigate()

  // Create state for the inputs:
  const [nameInput, setNameInput] = useState("")
  const [taglineInput, setTaglineInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [firstBrewedInput, setFirstBrewedInput] = useState("")
  const [brewerTipsInput, setBrewerTipsInput] = useState("")
  const [attenuationLevelInput, setAttenuationLevelInput] = useState(0)
  const [contributedByInput, setContributedByInput] = useState("")

  // Create state for the loading process:
  const [isLoading, setIsLoading] = useState(false)

  // Create a handler to manage the form submit (when pressing the button)
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Change isLoading to true (to show the client a spinner until we get the data):
    setIsLoading(true)

    try {
      const newBeer = {
        name: nameInput,
        tagline: taglineInput,
        description: descriptionInput,
        first_brewed: firstBrewedInput,
        brewer_tips: brewerTipsInput,
        attenuation_level: attenuationLevelInput,
        contributed_by: contributedByInput
      }
      // console.log(newBeer)
      // Use axios to make a post to send the data:
      const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      console.log(response)
      // If the beer is correctly created we can redirect to /beers:
      navigate("/beers")
    } catch (error) {
      console.log(error)
    }
  }

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
        <h3>Add a new beer</h3>
        <form onSubmit={handleSubmit} >
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
          />
          <br />
          <label htmlFor="tagline">Tagline </label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTaglineInput(e.target.value)}
            value={taglineInput}
          />
          <br />
          <label htmlFor="Description">Description </label>
          <textarea
            type="text"
            name="Description"
            onChange={(e) => setDescriptionInput(e.target.value)}
            value={descriptionInput}
          />
          <br />
          <label htmlFor="first-brewed">First Brewed </label>
          <input
            type="text"
            name="first-brewed"
            onChange={(e) => setFirstBrewedInput(e.target.value)}
            value={firstBrewedInput}
          />
          <br />
          <label htmlFor="brewer-tips">Brewers Tips</label>
          <input
            type="text"
            name="brewer-tips"
            onChange={(e) => setBrewerTipsInput(e.target.value)}
            value={brewerTipsInput}
          />
          <br />
          <label htmlFor="attenuation-level">Attenuation Level</label>
          <input
            type="text"
            name="attenuation-level"
            onChange={(e) => setAttenuationLevelInput(e.target.value)}
            value={attenuationLevelInput}
          />
          <br />
          <label htmlFor="contributed">Contributed By</label>
          <input
            type="text"
            name="contributed"
            onChange={(e) => setContributedByInput(e.target.value)}
            value={contributedByInput}
          />
          <br />

          {/* Make the button disabled if isLoading is true: */}
          <button type="submit" disabled={isLoading}>Add</button>
        </form>

    </div>
  )
}

export default CreateBeer