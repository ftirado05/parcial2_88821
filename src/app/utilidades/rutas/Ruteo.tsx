import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { RegistrarArtistas } from "../../componentes/artistas/RegistrarArtistas";
import { ListarArtistas } from "../../componentes/artistas/ListarArtistas";
import { NoEncontrada } from "../../componentes/contenedor/NoEncontrada";
import { AdminArtistas } from "../../componentes/artistas/AdminArtistas";
import { Acercade } from "../../componentes/otros/Acercade";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />

            <Route path="/regriart" element={<RegistrarArtistas />} />
            <Route path="/listart" element={<ListarArtistas />} />
            <Route path="/adminart" element={<AdminArtistas />} />
            <Route path="*" element={<NoEncontrada />} />
            <Route path="/acercade" element={<Acercade />} />
        </Routes>
    );
};
