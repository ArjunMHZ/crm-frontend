import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { SearchForm } from '../../components/Search-form/SearchForm.comp';
import { TicketTable } from '../../components/ticket table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json'
import { Link } from "react-router-dom";

export const TicketLists = () => {
  const [str, setstr] = useState('')
  const [dispTicket, setDisptickets] = useState(tickets)

  useEffect(() => {}, [str, dispTicket])
  

  const handleOnChange = e => {
    const {value} = e.target;
    setstr(value);
    searchTicket(value)
  
  }
  const searchTicket = sttr => {
    const displayTickets = tickets.filter(row => row.subject.toLowerCase().includes(sttr.toLowerCase()))
    setDisptickets(displayTickets)
    // console.log(displayTickets)
  }

  return (
    <Container>
        <Row>
            <Col>
              <PageBreadcrumb page="Ticket Lists"/>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
              <Link to="/add-ticket">
              <Button variant='info'>Add New Ticket</Button>
              </Link>
            </Col>
            <Col className='text-end'>
              <SearchForm 
              handleOnChange={handleOnChange}
              str = {str}
              />
            </Col>
        </Row>
        <hr />
        <Row className='mt-5'>
            <Col>
              <TicketTable tickets = {dispTicket}/>
            </Col>
        </Row>

    </Container>
  )
}
