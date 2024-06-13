import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export const LoginForm = ({ handleOnChange, handleOnSubmit, email, pass }) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-center">Welcome</h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        value={email}
                        onChange = {handleOnChange}
                        placeholder="Enter Email"
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        value={pass}
                        onChange = {handleOnChange}
                        placeholder="Enter Password"
                        required
                        />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
                <hr />
                </Col>
            </Row>
        </Container>
    );
};

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}