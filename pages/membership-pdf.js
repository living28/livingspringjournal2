import PDFViewer from 'pdf-viewer-reactjs'
import ElevateAppBar from '../components/header-elevatn'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

export default function Membership(){
    return(<>
        <ElevateAppBar/>
        <Paper style={{margin:30}}>
            <Grid container direction="column" >
                <div style={{margin:'auto', width: 900}}>
                <PDFViewer 
                    document={{
                        url: '/images/Membership_update.pdf',
                    }}
                    /> 
                    </div>
            </Grid>
        </Paper>
        </>
    )
}
