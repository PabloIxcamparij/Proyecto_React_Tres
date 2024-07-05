import { useEffect, useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";
import FormularioHeader from "./FormularioHeader";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="mx-auto cotainer px-5 py-8">

      <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logo"></img>
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/Favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>

            {/* El NAVLINK sabe en que vista esta,
                  por lo que sirve para resaltar */}
          </nav>
          
        </div>

        {isHome && <FormularioHeader/>}

      </div>
    </header>
  );
}
