import { NavLink } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <main>
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom">
              <i className="fa-solid fa-house-user fa-2x"></i>
          </header>

          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Bienvenidios</h1>
              <p className="col-md-8 fs-4">Hola 👋 estas en inicio...</p>
              <NavLink to="/">
                <button
                  className="btn btn-primary btn-lg"
                  type="button"
                  style={{ backgroundColor: "#bf1ea7", borderColor: "#bf1ea7" }}
                >
                  INICIO
                </button>
              </NavLink>
            </div>
          </div>
          <footer className="pt-3 mt-4 text-body-secondary border-top">
            Developer by Rodriguez Juan and Tirado Fabian © 2024
          </footer>
        </div>
      </main>
    </>
  );
};
