import React from 'react'

import { Container, Row, Col, Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";

// import {propTypes} from 'prop-types';



export const LoginForm = ({handleOnChange, handleOnSubmit, email, pass, formSwitcher}) => {
  return (
    <div className='container'>
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <FormGroup>
                        <FormLabel>Email Adress</FormLabel>
                        <FormControl
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder='Enter Email'
                        required
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                        type='password'
                        name='password'
                        value={pass}
                        onChange={handleOnChange}
                        placeholder='password'
                        required
                        />
                    </FormGroup>
                    
                    <Button className="login-btn" type='submit'>Login</Button>
                </Form>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href='#!' onClick={() => formSwitcher("reset")}>Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

// LoginForm.propTypes = {
//     handleOnChange: propTypes.func.isRequired,
//     handleOnSubmit: propTypes.func.isRequired,
//     email: propTypes.string.isRequired,
//     pass: propTypes.string.isRequired,
// }