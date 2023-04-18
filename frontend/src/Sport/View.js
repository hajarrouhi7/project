import React,{useState,useEffect}  from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./NavBar";
import Footer from "./Footer";
import './View.css';
const View = () => {
    
    const [terrain,setTerrain] =useState([])
    useEffect(() => {
        fetchTerrain();
       
    }, []);
    const fetchTerrain =async() =>{ // data from database
        await axios.get('http://127.0.0.1:8000/api/InfoTerrain')
        .then(({data})=>{
            setTerrain(data) 
        })
    }
    
    return(
        <div style={{backgroundColor:'#d0ffb7'}}>
            <div>
                <NavBar/>
                <div className="d-flex justify-content-center align-items-center" style={{paddingTop:'10vh',}}>
                <Row className="container text-center">
                {terrain.length > 0 && (
                terrain.map((row,key) =>(
                <Col className="">
                    <Card key={key} style={{ width: '15rem',backgroundColor:'white'}} className="mb-5" >
                    <Card.Img variant="Top" src={(`http://127.0.0.1:8000/img1/${row.img1}`)} style={{height:'20vh'}} />
                    <Card.Body>
                        <Card.Title>{row.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{row.location}</Card.Subtitle>
                        <Card.Text>Price: {row.price} DH/30 min</Card.Text>
                        <Button className="me-2 btn" variant="dark" href="./BookDetails" style={{width:'90px'}}>Book</Button>
                        <Link to={`/InfoView/${row.id}`}><Button variant="dark" className="btn" style={{width:'90px'}}>View</Button></Link>
                    </Card.Body>
                    </Card>
                </Col> 
                ))
                )}
                </Row>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
export default View;