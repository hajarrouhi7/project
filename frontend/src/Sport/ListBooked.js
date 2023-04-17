import React from "react";
import Container from "react-bootstrap/Container";
import NavBarAdd from "./NavBarAdd";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { AiOutlineSearch  } from 'react-icons/ai';
import FormCheck from "react-bootstrap/FormCheck";

const ListBook = () => {
    return(
        <div>
            <NavBarAdd/>
            <Container>
            <h3 className="mt-3">List Booked</h3>
            <InputGroup className="m-auto w-25 mt-3">
                <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
                <Form.Control placeholder="Search" />
            </InputGroup>
            <Table responsive bordered className="mt-3">
                <thead>
                    <tr>
                    <th>Title stade</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Number</th>
                    <th>Date book</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Total price DH/30min</th>
                    <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Stade El Harti</td>
                    <td>ROUHI HAJAR</td>
                    <td>hajar.rouhi@gmail.com</td>
                    <td>0777648976</td>
                    <td>20-06-2023</td>
                    <td>12:45 PM</td>
                    <td>3 hours</td>
                    <td>27 480</td>
                    <td>
                        <FormCheck label="Delete"/>    
                    </td>
                    </tr><tr>
                    <td>Stade El Harti</td>
                    <td>ZEROUAL WIAM</td>
                    <td>zeroual.wiam@gmail.com</td>
                    <td>0778365547</td>
                    <td>10-05-2023</td>
                    <td>16:25 PM</td>
                    <td>1 hours</td>
                    <td>9 160</td>
                    <td>
                        <FormCheck label="Delete"/>    
                    </td>
                    </tr><tr>
                    <td>Stade El Harti</td>
                    <td>JOHN WICK</td>
                    <td>john.wick@gmail.com</td>
                    <td>0637453689</td>
                    <td>09-10-2023</td>
                    <td>10:00 AM</td>
                    <td>5 hours</td>
                    <td>45 800</td>
                    <td>
                        <FormCheck label="Delete"/>    
                    </td>
                    </tr><tr>
                    <td>Stade El Harti</td>
                    <td>HALA SOBHI</td>
                    <td>hala.sobhi@gmail.com</td>
                    <td>0635485792</td>
                    <td>03-05-2023</td>
                    <td>09:30 AM</td>
                    <td>8 hours</td>
                    <td>73 280</td>
                    <td>
                        <FormCheck label="Delete"/>    
                    </td>
                    </tr>
                </tbody>
            </Table>
            </Container>
        </div>
    );
}
export default ListBook;