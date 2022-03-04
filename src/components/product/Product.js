import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DeleteIcon, EditIcon, StarIcon } from '@chakra-ui/icons';
import { FavouritesContext } from 'context/FavouritesContext';
import { ProductContext } from 'context/ProductContext';
import {
  Box, Heading, IconButton, Flex, Button, Text,
} from '@chakra-ui/react';
import { CATEGORIES } from './ProductDefinition';

function productContent(product) {
  let ret = [];
  for (const [productProp, productPropVal] of Object.entries(product)) {
    if (productProp === 'name') {
      continue;
    }
    const displayValue = CATEGORIES[productPropVal] !== undefined
      ? CATEGORIES[productPropVal] : productPropVal;
    ret = [...ret,
      <Flex key={productProp}>
        <Text fontWeight="600" marginRight={2}>
          {productProp}
          :
        </Text>
        {displayValue}
      </Flex>,
    ];
  }
  return ret;
}

const Product = function ({ product }) {
  const {
    isFavourite,
    addToFavourites,
    deleteFromFavourites,
  } = React.useContext(FavouritesContext);

  const { deleteProduct } = useContext(ProductContext);
  const onFavouriteClicked = useCallback((productId) => {
    productId = parseInt(productId);
    if (isFavourite(productId)) {
      deleteFromFavourites(productId);
    } else {
      addToFavourites(productId);
    }
  }, [isFavourite, addToFavourites, deleteFromFavourites]);

  return (
    <Box borderWidth="1px" borderRadius="lg" padding={5} maxW="lg">
      <Heading size="lg" marginBottom={2}>{product.name}</Heading>
      <div>{productContent(product)}</div>
      <Flex>
        <Button margin={1}><Link to={`/edit/${product.id}`}><EditIcon /></Link></Button>
        <IconButton margin={1} icon={<DeleteIcon />} onClick={() => { deleteProduct(product.id); }} />
        <IconButton
          margin={1}
          icon={<StarIcon color={isFavourite(product.id) ? 'yellow.500' : 'currentColor'} />}
          onClick={() => onFavouriteClicked(product.id)}
        />
      </Flex>
    </Box>
  );
};

export { Product };
