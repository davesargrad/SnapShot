import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 900,
      height: 450,
    },
  }),
);

const Gallery = props => {
  const classes = useStyles();
  const results = props.data;
  let images;
  let noImages;
  console.log("My images: ", results)
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <GridListTile key={id} cols={image.cols || 1}><Image url={url}  alt={title} /></GridListTile>;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} cols={4} spacing={4} >
        {images}
        {noImages}
      </GridList>
    </div>
  );
};

export default Gallery;
