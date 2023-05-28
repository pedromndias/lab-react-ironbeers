import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
        {/* Link tags are not working! */}
        <Link to="/">
            🏠
        </Link>
        
        </div>
  )
}

export default Header