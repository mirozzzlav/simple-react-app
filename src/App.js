import './App.css';
import {List} from './pages/list'
import {AddProduct} from './pages/add'
import {EditProduct} from './pages/edit'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState} from 'react';
import {ProductsState} from './ProductState'
import {FavouritesState, DEFAULT_FAVOURITES} from './FavouritesState'
import {ProductCategoryContext, FavouritesContext, DEFAULT_CATEGORIES} from './context'

function App() {
  
  const [productsList, setList] = useState(ProductsState.getDefaultProductsList());
  const productsState = ProductsState(productsList, setList);
  const productCategories = DEFAULT_CATEGORIES;
  const [favourites, setFavourites] = useState(DEFAULT_FAVOURITES);  
  const favouritesState = FavouritesState(favourites, setFavourites);
  
  return (
    <ProductCategoryContext.Provider value={productCategories}>
      <FavouritesContext.Provider value={favouritesState}>
      <div id="app">
        <Router>
          <Switch>
            <Route exact path="/"><List listItems={productsList} deleteFunc={(productId) => productsState.deleteProduct(productId)}/></Route>
            <Route exact path="/add">
              <AddProduct onFormSubmit={(product) => productsState.addNewProduct(product)} getProduct={() => productsState.createNewProduct()} />
            </Route>
            <Route exact path="/edit/:productId">
              <EditProduct onFormSubmit={(product) => productsState.editProduct(product)} 
                getProduct={(productId) => productsState.getProduct(productId)}/>
            </Route>
          </Switch>
        </Router>
      </div>
      </FavouritesContext.Provider>
    </ProductCategoryContext.Provider>
  );
}


export default App;
