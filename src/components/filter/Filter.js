import React, { useContext } from 'react';
import {
  Heading, Input, Stack, Text,
} from '@chakra-ui/react';
import { FilterContext } from 'context/FilterContext';

const Filter = function () {
  const { modifyFilter } = useContext(FilterContext);
  return (
    <Stack marginBottom={0}>
      <Heading as="h2" size="lg" mb={3} isTruncated>Filter</Heading>
      <Stack mb={3} spacing={1}>
        <Text>Search</Text>
        <Input
          id="filterName"
          val=""
          onChange={(e) => modifyFilter('name', e.target.value)}
        />
      </Stack>
      <Stack spacing={1}>
        <Text>Stock capacity</Text>
        <Input
          name="filterStockCapacityMin"
          val=""
          placeholder="min"
          onChange={(e) => modifyFilter('minStockCapacity', e.target.value)}
        />
        <Input
          name="filterStockCapacityMax"
          val=""
          placeholder="max"
          onChange={(e) => modifyFilter('maxStockCapacity', e.target.value)}
        />
      </Stack>
    </Stack>
  );
};

export default Filter;
