import styles from '../styles/index.module.css'
import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../components/main'


const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  control: {
    padding: theme.spacing(2),
  },
  skmargin:{
    margin: theme.spacing(9),
  }
  
}))
export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    // window.addEventListener('load', setLoading(true))
    setLoading(false)
    return () => {
          // Clean up ......
          setLoading(false)     
        };
      }, [loading, setLoading]);

  return (<Container maxWidth="lg" className={styles.app_bg_color}>
          {loading ? 
          <Grid container direction="row" justify="space-between" style={{marginTop:20}}>
            <Grid item xs={12}  lg={12} xl={12}> 
              <Skeleton variant="rect" width={400} height={100} className={classes.skmargin}/>
              <Skeleton variant="rect" width={400} height={100} className={classes.skmargin} />
              <Skeleton variant="rect" width={400} height={100} className={classes.skmargin} />
            </Grid>
          </Grid>
         : <Main/>
        }
    </Container>
    )
}

