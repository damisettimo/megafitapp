import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link to='/'>
    <h1 className="navbar-brand text-danger display-2" href="#"><h1 class="display-2">Megafit-Sup</h1></h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/category/proteina'>
          <button className="nav-link active" aria-current="page" href="#">Proteinas</button>
        </Link>
        </li>
        <li className="nav-item">
          <Link to='/category/creatina'>
          <button className="nav-link" href="#">Creatinas</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/category/pre-entrenamiento'>
          <button className="nav-link" href="#">Pre-entrenamiento</button>
          </Link>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>

        
    )
}

export default Navbar