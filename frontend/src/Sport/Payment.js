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
import { DemoContainer,DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaymentIcon from '@mui/icons-material/Payment';
const theme = createTheme();
const PaymentDetails = () => {
  return(
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
              <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                  <PaymentIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Payment Details
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField required id="cardOwner" label="Name on card" fullWidth autoComplete="cardOwner" variant="standard" name='cardOwner'/>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField required id="numCard" label="Card number" fullWidth autoComplete="numCard" variant="standard" name='numCard'/>
                    </Grid>
                    <Grid item xs={12}  sm={6} style={{marginTop:'5px'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker',]}>
                        <DemoItem name='dateExpiry'>
                        <DatePicker label='Expiry date' views={['month', 'year']} />
                        </DemoItem>
                    </DemoContainer>
                    </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <TextField required id="cvv" label="CVV" helperText="Last three digits on signature strip" fullWidth autoComplete="cvv" variant="standard" name='cvv'/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox color="secondary" name="saveCard" value="yes" />} label="Remember credit card details for next time" />
                    </Grid>
                  </Grid>
                  <Button type="button" id='btn' fullWidth sx={{ mt: 3, mb: 2 }} href=''>
                    Payment
                  </Button>
                </Box>
              </Box>    
      </Container>
      <Footer/>
    </ThemeProvider>
  )
}
export default PaymentDetails;