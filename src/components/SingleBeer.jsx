import React from 'react'

function SingleBeer({singleBeer}) {
  return (
    <div className="singleBeer-card">
          <img src={singleBeer.image_url} alt={singleBeer.name} />
          <div className="singleBeer-name">
              <h2>{singleBeer.name}</h2>
              <h2>{singleBeer.attenuation_level}</h2>
          </div>
          <div className="singleBeer-tagline">
              <h3>{singleBeer.tagline}</h3>
              <h3>{singleBeer.first_brewed}</h3>
          </div>
          <p>{singleBeer.description}</p>
          <p>{singleBeer.contributed_by}</p>
        </div>
  )
}

export default SingleBeer