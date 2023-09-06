import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const YearValidation = () => {
  const [year, setYear] = useState('');
  const [alertType, setAlertType] = useState('');
  const [message, setMessage] = useState('');

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleValidation = () => {
    const parsedYear = parseInt(year);
    if (parsedYear >= 2000 && parsedYear <= 2023) {
      setAlertType('success');
      setMessage('Year is within the valid range.');
    } else {
      setAlertType('danger');
      setMessage('Year is outside the valid range.');
    }
  };

  return (
    <Container className="mt-5">
      <h1>Year Validation</h1>
      <Form>
        <Form.Group>
          <Form.Label>Enter a valid year between 2000 – 2023:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter year"
            value={year}
            onChange={handleYearChange}
          />
        </Form.Group>
        <Button className="mt-3" variant="primary" onClick={handleValidation}>
          Validate
        </Button>
      </Form>
      {alertType && message && (
        <Alert variant={alertType} className="mt-3">
          {message}
        </Alert>
      )}
    </Container>
  );
};

export default YearValidation;
