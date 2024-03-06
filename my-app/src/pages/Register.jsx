import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="group">
        <Form.Group>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="lastName" placeholder="Last Name" />
        </Form.Group>
      </Form.Group>
      <Form.Group>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
