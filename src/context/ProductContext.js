import React, { useMemo, useState } from 'react';
import { DEFAULT_PRODUCT, PRODUCT_PROP_TYPES } from 'components/product/ProductDefinition';
import { generateID } from 'Utils';

const DEFAULT_PRODUCTS = [
  {
    id: 1, name: 'Lego', description: 'This is a super fancy lego', price: 5, stockCapacity: 10, category: 'toy',
  },
  {
    id: 2, name: 'Cheva', description: 'Have fun with this logical construction game', price: 10, stockCapacity: 22, category: 'toy',
  },
  {
    id: 3, name: 'Dell Laptop', description: 'Intel inside pentium :-)', price: 10, stockCapacity: 22, category: 'technology',
  },
];
const ProductContext = React.createContext();

const ProductContextProvider = function ({ children }) {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);

  const context = useMemo(() => ({
    products,
    addProductToList(product) {
      setProducts((prevProducts) => [...prevProducts, product]);
    },
    updateProduct(product) {
      setProducts(
        (prevProducts) => prevProducts.map(
          (prevProduct) => (product.id === prevProduct.id ? product : prevProduct),
        ),
      );
    },
    getProduct(productId) {
      productId = parseInt(productId);
      return products.find((product) => product.id === productId);
    },
    getEmptyProduct() {
      const newProduct = {
        id: generateID(),
      };
      for (const k of Object.keys(PRODUCT_PROP_TYPES)) {
        if (newProduct[k] === undefined) {
          newProduct[k] = DEFAULT_PRODUCT[k];
        }
      }
      return newProduct;
    },
    deleteProduct(productId) {
      productId = parseInt(productId, 10);
      setProducts(
        (prevProducts) => prevProducts.filter((product) => product.id !== productId),
      );
    },
  }), [setProducts, products]);

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContext };
export default ProductContextProvider;
