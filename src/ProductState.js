import { ProductPropTypes, ProductDefaults } from './components/product';

function ProductsState(productsList, setList) {
    
    const _getProduct = function(productId) {
      productId = parseInt(productId);
      for(let indx in productsList) {
        if (productsList[indx].id === productId) {
          return productsList[indx];
        }
      }
      return null;
    }
  
    const _getNewProductId = function() {
      return productsList[productsList.length - 1].id + 1;
    }
      
    return {
      getNewProductId: _getNewProductId,
      createNewProduct() {
        let product = {}
        for(const k of Object.keys(ProductPropTypes)) {
          product[k] = ProductDefaults[k]  
        }
        product.id = _getNewProductId();
        return product;
      },
      addNewProduct(product) {
        let newProductsList = [...productsList, product];
        setList(newProductsList);
      },
      editProduct(product) {
        let products = [];
  
        for(let indx in productsList) {
          if (productsList[indx].id  === product.id) {
            products = [...products, product];
            continue;
          }
          products = [...products, productsList[indx]];
        }
        setList(products);
        
      },
      getProduct: _getProduct,
      deleteProduct(productId) {
        productId =  parseInt(productId);
        let products = [];
  
        for(let indx in productsList) {
          if (productsList[indx].id !== productId) {
            products = [...products, productsList[indx]];
          }
        }
        setList(products);
      },
    }
}

ProductsState.getDefaultProductsList = function() {
    const productsList = [
        {id:1, name: "Lego", description: "This is a super fancy lego", price:5, stockCapacity: 10, category: 'toy'},
        {id:2, name: "Cheva", description: "Have fun with this logical construction game", price: 10, stockCapacity: 22, category: 'toy'},
        {id:3, name: "Dell Laptop", description: "Intel inside pentium :-)", price: 10, stockCapacity: 22, category: 'technology'}
    ]
    return productsList;
}

export {ProductsState}
  

