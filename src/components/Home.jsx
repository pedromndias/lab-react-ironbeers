import { Link } from "react-router-dom"
import image1 from "../assets/beers.png"
import image2 from "../assets/new-beer.png"
import image3 from "../assets/random-beer.png"


function Home() {
  return (
    <div>
        
        <Link className="link-card-link" to="/beers">
            <div className="link-card">
                <img src={image1} alt="beers" />
                <h2>All Beers</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem velit blanditiis at dolorum id vero rerum tenetur, quo quod tempora cupiditate quas rem corporis exercitationem. Eum minus molestiae nostrum earum fugiat voluptatibus animi nemo, tempora autem deleniti aperiam. Optio enim, omnis adipisci sint suscipit facere recusandae velit eveniet fugit quo esse, in quisquam rem repudiandae corrupti obcaecati commodi consectetur saepe eius? Quas maxime culpa mollitia tenetur adipisci officiis atque veritatis cum alias quia.
                </p>
            </div>
        </Link>
        <Link className="link-card-link" to="/random-beer">
            <div className="link-card">
                <img src={image2} alt="new-beer" />
                <h2>Random Beer</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem velit blanditiis at dolorum id vero rerum tenetur, quo quod tempora cupiditate quas rem corporis exercitationem. Eum minus molestiae nostrum earum fugiat voluptatibus animi nemo, tempora autem deleniti aperiam. Optio enim, omnis adipisci sint suscipit facere recusandae velit eveniet fugit quo esse, in quisquam rem repudiandae corrupti obcaecati commodi consectetur saepe eius? Quas maxime culpa mollitia tenetur adipisci officiis atque veritatis cum alias quia.
                </p>
            </div>
        </Link>
        <Link className="link-card-link" to="/new-beer">
            <div className="link-card">
                <img src={image3} alt="random-beer" />
                <h2>New Beer</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem velit blanditiis at dolorum id vero rerum tenetur, quo quod tempora cupiditate quas rem corporis exercitationem. Eum minus molestiae nostrum earum fugiat voluptatibus animi nemo, tempora autem deleniti aperiam. Optio enim, omnis adipisci sint suscipit facere recusandae velit eveniet fugit quo esse, in quisquam rem repudiandae corrupti obcaecati commodi consectetur saepe eius? Quas maxime culpa mollitia tenetur adipisci officiis atque veritatis cum alias quia.
                </p>
            </div>
        </Link>
    </div>
  )
}

export default Home