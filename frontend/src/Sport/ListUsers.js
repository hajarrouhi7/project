import React from "react";
import NavBarAdd from "./NavBarAdd";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { AiOutlineSearch  } from 'react-icons/ai';
import FormCheck from "react-bootstrap/FormCheck";
import Container from "react-bootstrap/Container";

const Users = () => {
    return(
        <div className="">
            <NavBarAdd/>
            <Container>
            <h3 className="mt-3">List Users</h3>
            <InputGroup className="m-auto w-25 mt-3">
                <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
                <Form.Control placeholder="Search" />
            </InputGroup>
            <Table responsive bordered className="mt-3">
                <thead>
                    <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>E-mail</th>
                    <th>Number</th>
                    <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>ROUHI</td>
                    <td>HAJAR</td>
                    <td>hajar.rouhi@gmail.com</td>
                    <td>0777648976</td>
                    <td>
                        <FormCheck label="Delete"/>    
                    </td>
                    </tr>
                    <tr>
                    <td>ZEROUAL</td>
                    <td>WIAM</td>
                    <td>zeroual.wiam@gmail.com</td>
                    <td>0778365547</td>
                    <td>
                        <FormCheck label="Delete"/>    
                    </td>
                    </tr><tr>
                    <td>WICK</td>
                    <td>JOHN</td>
                    <td>john.wick@gmail.com</td>
                    <td>0637453689</td>
                    <td>
                        <FormCheck label="Delete"/>    
                    </td>
                    </tr><tr>
                    <td>SOBHI</td>
                    <td>HALA</td>
                    <td>hala.sobhi@gmail.com</td>
                    <td>0635485792</td>
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
export default Users;