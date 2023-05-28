import Header from "./Header"
import { Link } from "react-router-dom"


function Beers({allBeers}) {

    

  return (
    <div>
        <Header />
        <h1>All Beers</h1>
        {allBeers.map((eachBeer) => {
            const {image_url, name, tagLine, contributed_by, _id} = eachBeer
            return (
                <div className="beer-card" key={_id}>
                    <img src={image_url} alt={name} />
                    <div>
                        <h2>{name}</h2>
                        <h3>{tagLine}</h3>
                        <h4>Created by: {contributed_by}</h4>
                        <Link to={`/beers/${_id}`}>More details</Link>
                    </div>
                </div>
            )
        })}

    </div>
  )
}

export default Beers