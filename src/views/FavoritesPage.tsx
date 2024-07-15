import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  const hasfavorites = useMemo(() => favorites.length, [favorites]);

  return (
    <>
      <h1 className="text-6xl font-extrabold"> Recetas </h1>
      {hasfavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {favorites.map((favorites) => (
            <DrinkCard key={favorites.idDrink} drink={favorites} />
          ))}
        </div>
      ) : (
        <>
          <p>No hay resultados, busque por medio del formulario</p>
        </>
      )}
    </>
  );
  
}


