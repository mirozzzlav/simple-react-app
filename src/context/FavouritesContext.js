import React, { useMemo, useState } from 'react';

const FavouritesContext = React.createContext([]);
const DEFAULT_FAVOURITES = [1, 2];
const searchFavourites = (favourites, searchedId) => favourites.find((id) => id === searchedId);

const FavouritesContextProvider = function ({ children }) {
  const [favourites, setFavourites] = useState(DEFAULT_FAVOURITES);

  const context = useMemo(() => ({
    addToFavourites(id) {
      setFavourites(
        (prevFavourites) => {
          const exists = searchFavourites(prevFavourites, id);
          if (exists !== undefined) {
            return prevFavourites;
          }
          return [...prevFavourites, id];
        },
      );
    },
    deleteFromFavourites(toDeleteId) {
      setFavourites(
        (prevFavourites) => prevFavourites.filter((id) => id !== toDeleteId),
      );
    },
    isFavourite(id) {
      return searchFavourites(favourites, id) !== undefined;
    },
  }), [setFavourites, favourites]);

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};
export default FavouritesContextProvider;
export { FavouritesContext };
