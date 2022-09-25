import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-danger display-2" href="#"><h1 class="display-2">Megafit-Sup</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" href="#">Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="#">Productos</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="#">Nosotros</button>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>

        
    )
}

export default Navbar