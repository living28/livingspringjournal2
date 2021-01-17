import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/carousel.module.css'
import Grid from '@material-ui/core/Grid';


export default function Slider(props)
{
    var items = [
        
        {
            name: "Nigeria's Foremost Institution in Science, Technology and Innovation (STI) Management",
            description: "Further description",
            imgsrc:"images/slide1bg.jpg",
            readmore:"Explore",
            backgroundColor: '#d9d9d9'
        },
        {
            name: "Policy Research Projects Aimed at assisting Policy Makers in STI Management Activities ",
            description: "and Provides Evidence-based Advice in the Formulation of STI Policy for Sustainable Development",
            imgsrc:"images/slide2bg.jpg",
            readmore:"Detailed information",
            backgroundColor: '#ff7c7c'
        },
        {
            name: "Capacity Building Programmes",
            description: "Specifically Designed to Address Knowledge Gaps Existing Within the National Innovation System",
            imgsrc:"images/slide3bg.jpg",
            readmore:"Enrol Now",
            backgroundColor: '#ffb6b9'
        },
    ]
 
    return (
        <Carousel interval={7000} animation={"fade"}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}



function Item(props){
    const { backgroundColor, imgsrc, name, description, readmore} = props.item;
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex', /* or inline-flex */
            '& > *': {
                // margin: theme.spacing(5),
                // width: theme.spacing(60),
                // height: theme.spacing(60),
            },
            flexDirection: 'row',
            justifyContent: 'flex-start',
            // alignItems: 'center',
            // maxWidth: '800',
            // maxHeight: '300',
            // marginLeft: 'auto',
            // marginRight: 'auto',
          },
          content: {
            position: 'absolute', /* Position the background text */
            bottom: 0, /* At the bottom. Use top:0 to append it to the top */
            background: 'rgb(0, 0, 0)', /* Fallback color */
            background: 'rgba(0, 0, 0, 0.5)', /* Black background with 0.5 opacity */
            color: '#f1f1f1', /* Grey text */
            width: '100%', /* Full width */
            padding: '20px', /* Some padding */
          },
        
    }));
    const classes = useStyles(); 
    return (
        <Paper>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                <img src={imgsrc}  alt="img here" className={styles.carousel_image}/>
                {/* <div id='logo' style={{background: `url(${imgsrc})`, width: "100%", backgroundRepeat: 'no-repeat'}}></div> */}
                <div className={classes.content}>
                    <Typography variant="h4" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {description}
                    </Typography>
                    <Button variant="contained" color="secondary">{readmore}</Button> 
                </div>
            </Grid>
        </Paper>
    )
}