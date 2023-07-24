import React from 'react'
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { TicketTable } from '../../components/ticket table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Button variant='info' style={{fontSize: "2rem", padding: "5px 30px"}}>
                Add New Ticket
            </Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-2'>
                <div>Total tickets: 50</div>
                <div>Pending tickets: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'> Recently Added Tickets</Col>
        </Row>
        <Row>
            <Col className='mt-3 recent-ticket'>
                <TicketTable tickets={tickets}/>
            </Col>
        </Row>


    </Container>
  )
}
