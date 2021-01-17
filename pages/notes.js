import ElevateAppBar from '../components/header-elevatn'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export default function Notes(){
    return <>
    <ElevateAppBar/>
    
        <Grid container>
            <Grid item xs={12} lg={2}>

            </Grid> 
            <Grid item xs={12} lg={8}> 
                <Paper style={{padding: 20}}>
                    <Typography variant="h5" gotterBottom>
                    Notes to Contributors
                    </Typography> 
                                    
                    <Grid item container  style={{marginTop:10}}> 
                    Livingspring Journal of Library and Information Science is a peer-reviewed journal that publishes scholarly articles and essays that make clear contributions to the scholarship of theory and practice in library and information science field. We publish original articles in all aspects of library and information science. Hence, contributions that are critical, empirical, well-researched and issues from theoretical, practice-based or analytical angles are welcomed, as well as contributions that focus on innovative and reflective approaches to knowledge, theory and practice of librarianship. 

                    The Journal aims to provide a stimulating and challenging forum for contributors to describe, theorise and reflect on their area of calling and is particularly interested in contributions that have relevance to local, national, continental and global context.

                    The editorial board also welcomes innovative articles that redefine information resources management.

                    Authors are required to submit their papers electronically in Word document format to livingspringjournal@gmail.com or abowakan@gmail.com

                    
                    <Typography variant="h5" gotterBottom>
                    General Format
                    </Typography> 
                    <br/>
                    (a)	Title of paper, name of author(s), affiliation of author(s), e-mail and telephone number of leading author (if more than one).
                    <br/>(b)	Font and size: (Times New Roman, size 12). 
                    <br/>(c)	Abstract: (Not more than 250 words).
                    <br/>(d)	Keywords: (Not more than five (5).
                    <br/>(e)	Body of text: Introduction; Literature; Methodology; Results and Discussion; Conclusion; Recommendations, References, Tables and graphs (Not more than 4000 Words).
                    <br/>(f)	References: American Psychological Association (APA) citation Style, 6th ed., 2010 (www.apastyle.org).
                    <br/>(g)	Table(s) and figure(s) should be embedded in the text and discussed immediately after presentation.
                    <br/>(i)	Assessment fee = N5,000.00:	Publication fee	=	N15,000.00.	


                    </Grid> 
                </Paper>
            </Grid>
            <Grid item xs={12} lg={2}>
                
            </Grid>
        </Grid>
    
    </>
}