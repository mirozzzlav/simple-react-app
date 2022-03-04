import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Filter from 'components/filter/Filter';
import ProductsList from 'components/product/ProductsList';

const ListPage = function () {
  return (
    <div className="flex-container">
      <Stack spacing={2}>
        <Filter />
        <Link to="/add">
          <Button colorScheme="blue" marginBottom={5}>
            Add new product
          </Button>
        </Link>
      </Stack>
      <ProductsList />
    </div>
  );
};

export default ListPage;
