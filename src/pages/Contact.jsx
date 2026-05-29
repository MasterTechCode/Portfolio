import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContactForm } from '../hooks/useContactForm';

function Contact() {
  const { state, updateField, submitForm } = useContactForm();

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", backgroundColor: "#1e1e1e", border: "none" }} className='form-control'>
        <Form
          data-aos="fade-up"
          data-aos-duration="1000"
          className='form'
          onSubmit={submitForm}
        >
          {state.success && (
            <div className="alert alert-success text-center mb-4">
              ✅ Message sent successfully! I'll reply soon.
            </div>
          )}

          {state.error && (
            <div className="alert alert-danger text-center mb-4">
              {state.error}
            </div>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={state.name}
              onChange={(e) => updateField('name', e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={state.email}
              onChange={(e) => updateField('email', e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Write your message here..."
              value={state.message}
              onChange={(e) => updateField('message', e.target.value)}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={state.isSubmitting}
            style={{marginLeft:"60px"}}
          >
            {state.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Form>
        </div>
      </>
      );
}

      export default Contact;