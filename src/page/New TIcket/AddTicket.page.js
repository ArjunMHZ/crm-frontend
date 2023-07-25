import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { AddTicketForm } from '../../components/Add ticket form/AddTicketForm.comp';
// import { useState } from "react";

import { shortText } from '../../utils/validation';

export const AddTicket = () => {
    const [formData, setFormData] = useState({
        subject: "",
        issueDate: "",
        details: ""
    })
    const [formDataError, setFormDataError] = useState({
        subject: false,
        issueDate: false,
        details: false
    })

    const handleOnChange = e => {
        const {name, value} = e.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    
    }

    const handleOnSubmit = async  (e)=> {
        e.preventDefault();

        const isSubjectValid = await shortText(formData.subject)
        setFormDataError(prevData => {
            return {
                ...prevData,
                subject: !isSubjectValid
            }
        }) 

        console.log("Buttton is Clicked")
    }

  return (
    <Container>
        <Row>
            <Col>
              <PageBreadcrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
              <AddTicketForm 
              handleOnChange={handleOnChange}
              FormDataError = {formDataError}
              FormData={formData}
              handleOnSubmit={handleOnSubmit}/>
            </Col>
        </Row>
    </Container>
  )
}
