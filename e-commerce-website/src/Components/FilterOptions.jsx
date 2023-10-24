import React from "react";
import { Checkbox, Box, Stack } from "@chakra-ui/react";
import './FilterOptions.css';
const FilterOptions = () => {
  return (
    <Box h={"520px"} pt={"10px"} box-shadow={' rgba(0, 0, 0, 0.16) 0px 1px 4px'}>
      <Stack direction="column"  >
        <h3>PRODUCT CATEGORIES</h3>
        <Checkbox className="checkbox">Antioxidants (26) </Checkbox>
        <Checkbox className="checkbox">Ayurvedic (13)</Checkbox>
        <Checkbox className="checkbox">Digestive Health (1)</Checkbox>
        <Checkbox className="checkbox">General Health (3)</Checkbox>
        <Checkbox className="checkbox">Herbal, Specialty Supplements(4)</Checkbox>
        <Checkbox className="checkbox">Immune Health (6)</Checkbox>
        <Checkbox className="checkbox">Men Health (4)</Checkbox>
        <Checkbox className="checkbox">Organic (1)</Checkbox>
        <Checkbox className="checkbox">Personal Care (3)</Checkbox>
        <Checkbox className="checkbox">Sexual Health (3)</Checkbox>
        <Checkbox className="checkbox">Uncategorized (1)</Checkbox>
        <Checkbox className="checkbox">Vitamins& Minerals (5)</Checkbox>
        <Checkbox className="checkbox">Women Health (6)</Checkbox>
      </Stack>
    </Box>
  );
};

export default FilterOptions;
