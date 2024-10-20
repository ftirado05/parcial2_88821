import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/logotiporeact.png";

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="logoreactmusica" height="70" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="*">
                  Conciertos
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle show"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Artistas
                </a>
                <ul className="dropdown-menu show" data-bs-popper="static">
                  <li>
                  <NavLink className="dropdown-item" to="/regriart">
                      Registar Artistas
                    </NavLink>
                  </li>
                  <li>
                  <NavLink className="dropdown-item" to="/listart">
                      Listar Artistas
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  <NavLink className="dropdown-item" to="/adminart">
                      Administrar Artistas
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/acercade">
                  Acerca de
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
