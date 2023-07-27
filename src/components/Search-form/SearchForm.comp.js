import React from 'react'
import { Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

export const SearchForm = ({handleOnChange, str}) => {
    // console.log(str)
  return (
    <div>
        <Form>
          <FormGroup as = {Row}>
            <FormLabel column sm = {3}>Search: </FormLabel>
            <Col sm={9}>
                <FormControl
                name="searchStr" 
                onChange={handleOnChange}
                value={str}
                placeholder='Search...'
                />
            </Col>
          </FormGroup>
        </Form>
    </div>
  )
}
