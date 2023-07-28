import React from 'react'
import { Form, Button } from "react-bootstrap";

export const ReplyTicket = ({msg, handleChange, handleSubmit}) => {
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Label>Reply</Form.Label><br />
        <Form.Text>Please reply your message here or update the ticket</Form.Text>
        <Form.Control 
            name="detail"
            as="textarea"
            row={5}
            value={msg}
            onChange={handleChange}
        />
        <div className='text-end mb-4 mt-4'>
            <Button variant='info' type='submit'>
                Reply
            </Button>
        </div>
        
    </Form>
  )
}
