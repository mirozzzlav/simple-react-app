import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import AddProductPage from 'pages/AddProduct';

import ProductContextProvider from 'context/ProductContext';
import FilterContextProvider from 'context/FilterContext';
import FavouritesContextProvider from 'context/FavouritesContext';
import List from 'pages/List';
import EditProductPage from 'pages/EditProduct';
import { Container } from '@chakra-ui/react';

const App = function () {
  return (
    <Container maxW="container.xl" margin="10px">
      <ProductContextProvider>
        <FilterContextProvider>
          <FavouritesContextProvider>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<List />} />
                <Route exact path="/add" element={<AddProductPage />} />
                <Route exact path="/edit/:productId" element={<EditProductPage />} />
              </Routes>
            </BrowserRouter>
          </FavouritesContextProvider>
        </FilterContextProvider>
      </ProductContextProvider>
    </Container>
  );
};

export default App;
