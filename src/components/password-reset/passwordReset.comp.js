import React from 'react'

import { Container, Row, Col, Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";

// import {propTypes} from 'prop-types';



export const ResetPassword = ({handleOnChange, handleOnResetSubmit, email, formSwitcher}) => {
  return (
    <div className='container'>
        <Container>
            <Row>
                <Col>
                <h3 className="text-info text-center">Reset Password</h3>
                <hr/>
                <Form autoComplete="off" 
                onSubmit={handleOnResetSubmit}>
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
                
                    
                    <Button className="login-btn" type='submit'>Reset Password</Button>
                </Form>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href='#!' onClick={() => formSwitcher("login")}>Login Now</a>
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