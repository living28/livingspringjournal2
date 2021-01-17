import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import EmailIcon from '@material-ui/icons/Email';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Grid from '@material-ui/core/Grid';


export default function BottomMenu() {
  const [value, setValue] = React.useState(0);

  return (<Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
    <BottomNavigation 
    value={value} 
    onChange={(event, newValue) => { setValue(newValue);}}
      showLabels
    >
      <Grid item xs={12} lg={4} xl={3}><BottomNavigationAction label="Webmail" icon={<LanguageIcon />} /></Grid>
      <Grid item xs={12} lg={4} xl={3}><BottomNavigationAction label="dg.ceo@nacetem.gov.ng" icon={<EmailIcon />} /></Grid>
      <Grid item xs={12} lg={4} xl={3}><BottomNavigationAction label="librarian@nacetem.gov.ng" icon={<LocalLibraryIcon />} /></Grid>
      <Grid item xs={12} lg={4} xl={3}><BottomNavigationAction label="Web Master" icon={<DeveloperModeIcon />} /></Grid>

    </BottomNavigation>
    </Grid>
  );
}
{/* <NavLink href="http://www.nacetem.gov.ng/webmail">Webmail</NavLink><br/>
<NavLink href="mailto:dg.ceo@nacetem.gov.ng">dg.ceo@nacetem.gov.ng</NavLink><br />
<NavLink href="mailto:librarian@nacetem.gov.ng">librarian@nacetem.gov.ng</NavLink> */}
