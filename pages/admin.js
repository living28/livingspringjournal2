import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { Paper } from '@material-ui/core';
import axios from 'axios'
import {API_URL} from '../utils/constants'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';



export default function Preferences() {
    const router = useRouter()
  
    return (<>
<Formik
        initialValues={{
          title: '',
          author: '',
          vol : '',
          number : '',
        }} 
        validationSchema={Yup.object({
          title: Yup.string('Enter your title')
          .required('title is required'),
          author: Yup.string('Enter author')
          .required('author is required'),
          vol: Yup.string('Enter volume')
          .required('Volume is required'),
          number: Yup.string('Enter volume nmber')
          .required('Volume nmber is required'),          
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.post(`${API_URL}/journals`, {
            title: values.title,
            author: values.author,
            vol: values.vol,
            number: values.number,
          })
          .then(res=>{
            if(res.data){
                localStorage.setItem('id', res.data.id)
                router.push('/file-upload')
          }
          })
          .catch(err => console.log(err));
          setSubmitting(false);
        }
    }
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
                <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                  <Paper style={{padding:20}}>
                        <Grid item>
                            <FormControl style={{width:400}}>
                                <Field style={{marginBottom:20}}
                                    component={TextField}
                                    name="title"
                                    type="text"
                                    label="Title"
                                    />
                            </FormControl>
                        </Grid>
                      <Grid item>
                        <FormControl style={{width:400}}>
                            <Field style={{marginBottom:20}} 
                                component={TextField}
                                name="author"
                                type="text"
                                label="Author"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl style={{width:400}}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="vol"
                                type="text"
                                label="Volume"
                            />
                        </FormControl>
                      </Grid>                                     
                      <Grid item>
                        <FormControl style={{width:400}}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="number"
                                type="text"
                                label="Number"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                    <Button
                    variant="outlined" 
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    style={{ marginBottom:20 }}
                    >
                        Save and continue
                        
                    </Button>
                </Grid>
                </Paper>
            </Grid>
                  
                  
          </Form>
        )}
      </Formik>
    </>)
}