import React, { useMemo, useState } from 'react';

const FilterContext = React.createContext({});

const FILTER_DEFAULTS = {
  name: null,
  minStockCapacity: 0,
  maxStockCapacity: Number.MAX_SAFE_INTEGER,
};

const FilterContextProvider = function ({ children }) {
  const [filter, setFilter] = useState(FILTER_DEFAULTS);
  const context = useMemo(() => (
    {
      modifyFilter: (filterProp, filterValue = null) => {
        filterValue = (filterValue || filterValue === 0) ? filterValue : FILTER_DEFAULTS[filterProp];
        setFilter((prevFilterState) => ({ ...prevFilterState, [filterProp]: filterValue }));
      },
      filter,
    }), [filter, setFilter]);

  return (
    <FilterContext.Provider value={context}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
export { FilterContext };
