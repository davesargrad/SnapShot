import React from "react";
import Container from "./Container";

import Typography from '@material-ui/core/Typography';

const Item = ({ searchTerm }) => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        {searchTerm} Pictures
      </Typography>

      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
