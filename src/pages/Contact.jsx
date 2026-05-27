import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <>
      <Form data-aos="fade-up" data-aos-duration="1000" className='form'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" className='email'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Send me message</Form.Label>
        <Form.Control as="textarea" rows={3} className='textarea'/><br/>
        <Button variant="primary">Send</Button>
      </Form.Group>
    </Form><br />
    </>
  );
}

export default Contact;