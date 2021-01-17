import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link'
import LinkIcon from '@material-ui/icons/Link';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  }
});

export default function Right1() {
  const classes = useStyles();

  return (
    <Paper>
      <List component="nav" aria-label="quick links">
        <ListItem>
          <LinkIcon/>
          <Typography variant="h6">
          &nbsp;<b>Quick link</b>
          </Typography>
          
          </ListItem>
        <ListItem button>
          <Link href="/notes">
            <a>
            Notes to Contributors
            </a>
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/about">
            <a>
            Editorial Board
            </a>
          </Link>
        </ListItem>
        <ListItem button>
        <Link href="/archive">
            <a>
            Archive
            </a>
          </Link>
        </ListItem>
      </List>
    </Paper>
    
  );
}
