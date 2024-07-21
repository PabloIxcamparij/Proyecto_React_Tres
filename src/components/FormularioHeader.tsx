import { useAppStore } from "../stores/useAppStore";
import { ChangeEvent, FormEvent, useState } from "react";

export default function FormularioHeader() {
  const Categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormControlsCollection>) => {
    e.preventDefault();

    if (Object.values(searchFilters).includes("")) {
      
      showNotification({
        text: "Todos los campos son obligatorios",
        error: true,
      });

      return;
    }

    searchRecipes(searchFilters);
  };

  return (
    <>
      <form
        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-20 p-8 rounded-lg shadow space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <label
            htmlFor="ingredient"
            className="block text-white uppercase font-extrabold text-lg"
          >
            Nombre o Ingredientes
          </label>

          <input
            id="ingredient"
            type="text"
            name="ingredient"
            className="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o Ingrediente"
            onChange={handleChange}
            value={searchFilters.ingredient}
          />
        </div>

        <div className="space-y-4">
          <label
            htmlFor="category"
            className="block text-white uppercase font-extrabold text-lg"
          >
            Categoria
          </label>

          <select
            id="category"
            name="category"
            className="p-3 w-full rounded-lg focus:outline-none"
            onChange={handleChange}
            value={searchFilters.category}
          >
            <option value="">-- Selecione --</option>

            {Categories.drinks.map((category) => (
              <option value={category.strCategory} key={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>

          <input
            type="submit"
            value="Buscar Recetas"
            className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-extrabold w-full p-2 rounded-lg uppercase"
          />
        </div>
      </form>
    </>
  );
}
