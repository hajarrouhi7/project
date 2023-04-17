import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './SignUp.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer,DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
const theme = createTheme();
const BookDetails = () => {
    return(
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                  <BookmarkAddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Book Details
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="firstName" name="firstName" fullWidth label="First name" autoComplete="given-name" variant="standard" autoFocus/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="lastName" name="lastName" label="Last name" fullWidth autoComplete="family-name" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="email" name="email" label="E-mail" fullWidth autoComplete="email" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="number" name="number" label="Number" fullWidth autoComplete="number" variant="standard" />
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                            <DemoItem>
                                <DatePicker name="dateBook" label="Basic date picker" />
                            </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer name="timeBook" components={['MobileTimePicker',]}>
                            <DemoItem>
                                <MobileTimePicker label="Book Time" />
                            </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="duration" name="duration" label="Duration" fullWidth autoComplete="duration" variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="totalPrice" name="totalPrice" label="price" fullWidth autoComplete="totalPrice" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox color="secondary" name="saveAddress" value="yes" />} label="Use this Booked details for payment details"/>
                    </Grid>
                  </Grid>
                  <Button type="submit" id='btn' fullWidth  sx={{ mt: 3, mb: 2 }} href='./Payment'>
                    Book
                  </Button>
                </Box>
              </Box>
            </Container>
            <Footer/>
        </ThemeProvider>
    )
}
export default BookDetails;