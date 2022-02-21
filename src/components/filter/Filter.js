
function Filter({setFilter}) {    
    return (
        <div className="filter shadow-box">
            <h2>Filter</h2>
            <label>
                Search
                <input id="filterName" val="" onChange={(e) => setFilter('name', (e.target).value)}/>
            </label>
            <label>
                Stock capacity
                <div className="inline-controls">
                    <input name="filterStockCapacityMin" val="" placeholder="min" onChange={(e) => setFilter('minStockCapacity', e.target.value)} />
                    <input name="filterStockCapacityMax" val="" placeholder="max" onChange={(e) => setFilter('maxStockCapacity', e.target.value)} />
                </div>
            </label>
        </div>
    )
    

}

export {Filter}