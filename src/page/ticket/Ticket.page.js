import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp"
import { ReplyTicket } from '../../components/Reply Ticket/ReplyTicket.comp';
import { useParams } from "react-router-dom";

// const ticket = tickets[0];
export const Ticket = () => {
  const {tId} = useParams()

  const[message, setMessage] = useState("")
  const[ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if(tickets[i].id == tId){
        setTicket(tickets[i]);
        continue;
      }
      
    }
  }, [message, tId])
  

  const handleChange = (e)  => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    alert("Form submitted")
    // e.preventDefault();

  }

  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page = "Ticket" />
            </Col>
        </Row>
        <Row>
            <Col className='tw-bolder text-secondary'>
            <div className='subject'>Subject: {ticket.subject}</div>
            <div className='date'>Ticket Opened: {ticket.addedAt}</div>
            <div className='status'>Status: {ticket.status}</div>
            </Col>
            <Col className='text-end'>
              <Button variant='outline-info'>Close Ticket</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
              {ticket.history && <MessageHistory msg={ticket.history}/>}
            </Col>
        </Row>
        <hr />
        <Row className='mt-4'>
            <Col>
              <ReplyTicket 
              msg = {message} 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              />
            </Col>
        </Row>

    </Container>
  )
}
