import React from "react";
import Container from "./Container";

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const Item = ({ searchTerm }) => {
  return (
    <Box component="div" m={1}>
      <Typography variant="h2" gutterBottom>
        {searchTerm} Pictures
      </Typography>

      <Container searchTerm={searchTerm} />
    </Box>
  );
};

export default Item;
