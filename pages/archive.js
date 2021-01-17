import ElevateAppBar from '../components/header-elevatn'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import {API_URL} from '../utils/constants'
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import download from 'downloadjs';


export default function Archive(){
    const [errorMsg, setErrorMsg] = React.useState('');  
    const [vol1, setVol1] = React.useState([]);
        React.useEffect(() => {
        getVolume1()
    }, []);
    const getVolume1 = () => {
        axios
          .get(`${API_URL}/journalsVol1`)
          .then(res=>setVol1(res.data))
          .catch(err => console.log(err))  
          }
    const downloadFile = async (id, path, mimetype) => {
    try { 
        const result = await axios.get(`${API_URL}/download/${id}`, {
        responseType: 'blob'
        });
        const split = path.split('/');
        const filename = split[split.length - 1];
        setErrorMsg('');
        result.data? download(result.data, filename, mimetype): null;
        return;
    } catch (error) {
        if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
        }
    }
    };
    return <>
    <ElevateAppBar/>
    <Paper>
        <Grid container direction="row">
            <Grid item xs={12} lg={3}> 
                 
            </Grid> 
            <Grid item item xs={12} lg={6} container justify='space-around'> 
                <Grid item>
                <Typography variant="h3" gutterBottom>
                    Archive
                </Typography>
                <Typography variant="h5" gutterBottom>
                Volume 1 maiden edition 2018
                </Typography>
                {/* <hr/> */}
                {vol1.map(({author, title, id, file_path, file_mimetype}) => (
                <div style={{margin:10}}>
                  <Typography variant="body1" gutterBottom>
                    <span>
                       <b>{author}</b> 
                    </span>
                    &nbsp;
                    <span>
                        <i> {title}</i>
                    </span>
                    &nbsp;&nbsp;
                    <span>
                      <a
                          href="#/"
                          onClick={() =>
                            {downloadFile(id, file_path, file_mimetype)}
                          }
                          >
                            <Tooltip title="Download">
                            <img src='/images/pdf3.png' width='20' height='15' alt='download journal'/>
                            
                          </Tooltip>
                          </a>
                    </span>
                    </Typography>
                </div>
                ))
              }
                </Grid>
                
            </Grid>
            <Grid item xs={12} lg={3}>
                             
            </Grid>
        </Grid>
    </Paper>
    </>
}