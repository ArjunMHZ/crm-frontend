import React from 'react'
import { Container, Form, Button, FormGroup, FormLabel, FormControl, Row, Col, FormText } from "react-bootstrap";

import "./add-ticket-form.style.css";


export const AddTicketForm = ({handleOnSubmit, handleOnChange, FormData, FormDataError}) => {
    return (
        <Container style={{maxWidth: "550px"}} className='mt-3 add-new-ticket jumbotron bg-light'>
            <h1 className='text-info text-center'>Add New Ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <FormGroup as={Row}>
                    <FormLabel column sm={3}>Subject</FormLabel>
                    <Col sm={9}>
                    <FormControl
                        type='text'
                        name='subject'
                        value={FormData.subject}
                        onChange={handleOnChange}
                        placeholder='Subject'
                        // minLength={5}
                        maxLength={100}
                        required
                    />
                    <FormText className='text-danger'>
                        {FormDataError.subject && "Subject is required"}
                    </FormText>
                    </Col>
                </FormGroup>
                <FormGroup as={Row}>
                    <FormLabel column sm={3}>Issue Found</FormLabel>
                    <Col sm={9}>
                        <FormControl style={{ marginTop: "10px" }}
                            type='date'
                            name='issueDate'
                            value={FormData.issueDate}
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Details</FormLabel>
                    <FormControl
                        as="textarea"
                        name='details'
                        value={FormData.details}
                        onChange={handleOnChange}
                        rows={5}
                        required
                    />
                </FormGroup>

                <Button className="w-100 mt-3 ticket-btn" type='submit' variant='info'>Login</Button>
            </Form>
        </Container>
    )
}
