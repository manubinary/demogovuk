import React from 'react';
import './BasicForm.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

function BasicForm() {

  return (
    <div className='formContainer'>
      <h1>Welcome to UKHSA demo web page</h1>
      <Row>
        <Col md='2' />
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" button aria-label="Submit form" >
              Submit
            </Button>
          </Form>
        </Col>
        <Col md='2' />
      </Row>
    </div>
  );
}


export default BasicForm;