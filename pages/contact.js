import ElevateAppBar from '../components/header-elevatn'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';


export default function Contact(){
    return <>
    <ElevateAppBar/>
    <Paper>
        <Grid container direction="column">
            <Grid item container justify='center'> 
                <Typography variant="h5" style={{margin:20}}>
                    Contacts
                </Typography> 
            </Grid> 
            <Grid item container justify='space-around'> 
                <Grid item>
                    <Typography variant="body1" gutterBottom> 
                        <b>Editor-in-Chief</b>	<br/>							
                        Dr. J.K. Opele,	<br/>								
                        National Centre for Technology Management,<br/>		 
                        Obafemi Awolowo University, Ile-Ife. <br/>				 
                        <b>Mobile</b>: 08034906312		<br/>					
                        <b>Email</b>: opelejk@gmail.com
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" gutterBottom> 
                        <b>Assistant Editor</b><br/>
                        Dr. W. A. Aboyade,<br/>
                        Hezekiah Oluwasanmi Library,<br/>
                        Obafemi Awolowo University, Ile-Ife.<br/>
                        <b>Mobile</b>: 08063180909
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify='space-around'>
            <Typography variant="h5" style={{margin:20}}>
            Our email: livingspringjournal@gmail.com
                </Typography>
                 
            </Grid>
        </Grid>
    </Paper>
    </>
}