import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width:"100%",
    objectFit: "fill"
  },
});

export default function Right2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image="images/latest_uploads.png"
          title="Download the latest uploads"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{margin:10}}>
            Latest Uploads
          </Typography>
          
            <Button color="inherit">
              <Tooltip title="Download">
                <a href="/pdfs/vol1.pdf" download> Volume 1&nbsp;&nbsp;<img src='/images/pdf3.png' width='20' height='15'/>  </a>
              </Tooltip>
            </Button>
            <br/>
            <Button color="inherit">
              <Tooltip title="Download">
                <a href="/pdfs/vol2.pdf" download> Volume 2&nbsp;&nbsp;<img src='/images/pdf3.png' width='20' height='15'/>  </a>
              </Tooltip>
            </Button>
          
        </CardContent>
      {/* </CardActionArea> */}
      
    </Card>
  );
}
