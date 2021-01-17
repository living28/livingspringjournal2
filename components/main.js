import React from 'react'
// import Slider from './slider'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Right1 from './news/right1'
import Right2 from './news/right2'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ElevateAppBar from './header-elevatn'
import download from 'downloadjs';
import axios from 'axios';
import {API_URL} from '../utils/constants'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import whatever from '../styles/carousel.module.css'


const useStyles = makeStyles(() => ({
    mt:{
        marginTop:20,
      },
      news_container:{
        display: 'flex',
        flexFlow: 'row',
      },
}))
export default function Main(){
  const [, setErrorMsg] = React.useState('');  
  React.useEffect(() => {
    getVolume1()
  }, []);
  const [searchRes, setsearchRes] = React.useState([]);
  const [searchVal, setsearchVal] = React.useState('');
  const [vol1, setVol1] = React.useState([]);
  const focusSearch = React.useRef(null)

  const getVolume1 = () => {
    axios
      .get(`${API_URL}/journalsVol1`)
      .then(res=>setVol1(res.data))
      .catch(err => console.log(err))  
      }
  const getJournals = async (searchVal) => {
    const results = await axios.get(`${API_URL}/journals?search=${searchVal}`, {
      headers: {'accept': 'application/json'}})
      // const journalData = await results.json()
      // return journalData.results
      return results.data

      }

  // PREVENTS RERENDER FLICKERING AS USER TYPES IN SEARCH
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
      // useEffect - ONLY RERENDERS WHEN searchVal IS CHANGED
    React.useEffect(() => {
      let currentsearchVal = true
      const controller = new AbortController()
      const loadJournals = async () => {
          if (!searchVal) return setsearchRes([])
          await sleep(350) 
          if (currentsearchVal) {
              const journals = await getJournals(searchVal, controller)
              setsearchRes(journals)
          }
      }
      loadJournals()
      return () => {
          currentsearchVal = false
          controller.abort()
      }
  }, [searchVal])


  const handleSearch = (e)=> {
      e.preventDefault()
      const search = e.target.value
      return setsearchVal(search)
      // getJournals(search)
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
    return(<>
      <ElevateAppBar/>
      <Grid container direction="row" justify="center"  alignItems="flex-start">
        <Grid item xs={12} md={12} lg={12}>
          <div style={{margin: 'auto', width:800}} className={whatever.image}>
            <img src='/images/nla_banner.jpg' alt='banner' width={800}/>
          </div>
        </Grid>
      </Grid> 
      
      <Grid container direction="row" justify="space-between" style={{marginTop:20}}>
        <Grid item container direction="column" xs={12} lg={8} >
        <Paper style={{padding:20}}>
          <Typography variant="h5" component="h5" gutterBottom>
            <b> Search all journals  </b>      
          </Typography>
          <TextField fullWidth id="outlined-search" 
          type="search" variant="outlined" 
          ref={focusSearch} onChange={handleSearch} 
          value={searchVal}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          />
          {/* {JSON.stringify(searchRes)} */}
          {searchRes && searchRes.map(({author, title, id, file_path, file_mimetype}) => (
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
                            <img src='/images/pdf1.png' width='30' height='20' alt='download journal'/>
                            
                          </Tooltip>
                          </a>
                    </span>
                    </Typography>
                </div>
                ))}
        </Paper>
          <Grid item>
            <Paper elevation={0} style={{marginTop:10, padding:20}}>
              <Button style={{color:"#00B500"}}>Accepted Manuscript</Button><br/>
            </Paper>
            
          </Grid>
          <Grid item>
            <Paper elevation={0} style={{marginTop:10, padding:20}}>
              <Button disabled style={{color:"#00B500"}}>Volume 1 maiden edition 2018</Button><br/>
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
              
              {/* <Button style={{color:"#00B500"}}>Volume 1 No 2</Button><br/>*/}
              <Button style={{color:"#00B500"}}>
                <a href="/pdfs/vol2.pdf" download> Volume 2&nbsp;&nbsp;<img src='/images/pdf3.png' width='20' height='15'/>  </a>
             
            </Button> <br/>
              {/* <Button style={{color:"#00B500"}}>Volume 2  No 2</Button>  */}

            </Paper>
          </Grid>  
      </Grid>
        <Grid item container direction="column" xs={12} lg={3}>
          <Grid item>
            <Right1/>
          </Grid>
          <Grid item style={{marginTop:20}}>
            <Right2/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12} style={{backgroundColor:"#222", height:150, marginTop:40 }}>
          
       <div style={{margin: 'auto', width:800}}><h2 style={{color:'white', paddingLeft:20, paddingRight:20}}>
         Journal of the Nigerian Library Association Osun State Chapter
        </h2>
      <Typography variant="h6" gutterBottom style={{color:'white',  paddingLeft:20,paddingRight:20}}>
      <b>ISSN: 2705-3644 - Online </b><br/>
      <b>ISSN: 2705-3687 - Print</b>  
      
       </Typography>
       </div>
        </Grid>
        </>
    )
}