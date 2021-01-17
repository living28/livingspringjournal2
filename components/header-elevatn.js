// import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  myflex: {
    flex:1,
  },
  titleIcon:{
    fontSize:50,
    color:'maroon',
    alignItems:'centre'
  },
  news:{
    display:'flex',
    flexGrow: 1,
    flexFlow: 'row wrap',
    padding:10,
    justifyContent:'center',
  },
  newsItem:{
    margin:10
  },
  m:{
    marginLeft:20,
    marginTop:20,
  },
  mt:{
    marginTop:20,
  },
  fright: {
    float:"right",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const [, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [, setpolicyRes] = React.useState(null);
  const [capacity, setcapacity] = React.useState(null);
  const [, setUpcomings] = React.useState(null);
  const [, setContact] = React.useState(null);
  const [] = React.useState(false);
  const [, setAbout] = React.useState(false);
  const [, setHome] = React.useState(false);
  
  const router = useRouter()
  

  const handleCapacity = (event) => {
    setcapacity(event.currentTarget);
  };
  const handleCloseCapacity = () => {
    setcapacity(null);
  };
  const handleUpcomings = (event) => {

    setpolicyRes(event.currentTarget);
  };
  const handleContact = () => {
    router.push('/contact')
    setContact(null);
  };
  
  const handleHome = () => {
    router.push('/')
    setHome(null);
  };
  const handleAbout = () => {
    router.push('/about')
    setAbout(null);
  };
  

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (<React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{backgroundColor:"#00B500"}}>
          <Toolbar>
          
          <img src="logo.jpg" alt="logo" with="50" height="50" className={classes.menuButton}/>
            <Typography variant="h5" className={classes.myflex}>
              Livingspring Journal of Library and Information Science
            </Typography>
            <div>
            <Button color="inherit" onClick={handleHome}>
                Home
            </Button>
            <Button color="inherit" onClick={handleAbout}>About Us</Button>
            <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleCapacity}>
              News
            </Button>
              <Menu
                id="simple-menu"
                anchorEl={capacity}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(capacity)}
                onClose={handleCloseCapacity}
              >
                
                <MenuItem onClick={handleClose}>
                  <Avatar alt="mtech jpg" src="images/mtech.jpg" className={classes.large} />
                  &nbsp;
                  <Button color="inherit" style={{color:'maroon'}}>
                    <a href="/images/Membership_update.pdf" style={{color:'maroon'}}>Membership Update </a>
                     
                  </Button>
                </MenuItem>
                  <Divider variant="inset" component="li" />
                  
                <MenuItem onClick={handleClose}>
                <Avatar alt="mtech jpg" src="images/pgd_img1.jpg" className={classes.large} />
                &nbsp; 
                <Button color="inherit">
                    <a href="/images/News_update.pdf" style={{color:'maroon'}}> News Update </a>
                  </Button>
                </MenuItem>
                  {/* <Divider variant="inset" component="li" />
                <MenuItem onClick={handleClose}>Across the Globe</MenuItem> */}
              </Menu>
              <Button color="inherit" onClick={handleUpcomings}>Upcomings</Button>
              <Button color="inherit" onClick={handleContact}>Contact Us</Button>             
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar style={{marginBottom:20}}/>
     
    </React.Fragment>
  );
}
