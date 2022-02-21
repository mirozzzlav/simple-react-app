

const DEFAULT_FAVOURITES = [1,2];

function FavouritesState(favourites, setFavourites) {
      
    const _searchFavourites = (id) => {      
      for (let indx in favourites) {
        if (favourites[indx] === id) {
          return parseInt(indx);    
        }
      }
      return false;
    }

    return {
      addToFavourites(id) {      
        const exists = _searchFavourites(id);
        if (exists !== false) {
          return;
        }
        setFavourites([...favourites, id]);
      },
      deleteFromFavourites(id) {
        const toRemoveIndx = _searchFavourites(id);
        if (toRemoveIndx === false) {
          return;
        }

        setFavourites(
          [...favourites.slice(0, toRemoveIndx), ...favourites.slice(toRemoveIndx+1)]
        );
      },
      isFavourite(id) {
        return _searchFavourites(id) !== false
      }     
    }
}


export {FavouritesState, DEFAULT_FAVOURITES}
  

