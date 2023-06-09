import React from "react";
import NavBar from './NavBar';
import Footer from './Footer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const theme = createTheme();
const CardBook = () => {
    return(
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container component="main" maxWidth="sm" style={{marginTop:'20px',marginBottom:'30px',borderRadius:'20px',backgroundColor:'#e9f5db'}}>
              <CssBaseline />
              <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                  <BookmarkIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Card Book
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                <React.Fragment>
                    <List disablePadding>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Full Name' />
                        <Typography variant="body2">ROUHI HAJAR</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Date Booked' />
                        <Typography variant="body2">20-06-2023</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Time Booked' />
                        <Typography variant="body2">12:45 PM</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Title Stade' />
                        <Typography variant="body2">Stade El Harti</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Type Stade' />
                        <Typography variant="body2">FootBall</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary='Duration' />
                        <Typography variant="body2">3 hours</Typography>
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Price" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        27 480 MAD
                        </Typography>
                        </ListItem>
                    </List>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Stade Location
                        </Typography>
                        <Typography gutterBottom>Grand Stade de Marrakech, Ouahat Sidi Brahim</Typography>
                        </Grid>
                        <Grid item container direction="column" xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Payment details
                        </Typography>
                        <Grid container>
                            <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card type</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Visa</Typography>
                            </Grid>
                            </React.Fragment>
                            <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card holder</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>ROUHI HAJAR</Typography>
                            </Grid>
                            </React.Fragment>
                            <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card number</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>342 15* *** *** ***</Typography>
                            </Grid>
                            </React.Fragment>
                            <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Expiry date</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>10/2025</Typography>
                            </Grid>
                            </React.Fragment>
                        </Grid>
                    </Grid>
                </Grid>
                </React.Fragment>
                </Box>
              </Box>
            </Container>
            <Footer/>
        </ThemeProvider>
    );
}
export default CardBook;