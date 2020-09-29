import React from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { useStaticQuery, graphql } from "gatsby"

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSlimMedia {
        email
      }
    }
  `)
  return (
    <div>
      <Container fluid className="form_container" style={{ padding: "0" }}>
        <Form
          action={`https://formspree.io/${data.contentfulSlimMedia.email}`}
          method="POST"
        >
          <Form.Group as={Row}>
            <Form.Label column sm={{ span: 2, offset: 0 }}>
              Name*
            </Form.Label>
            <Col xs={15} sm={5} lg={3}>
              <Form.Control
                style={{ background: "transparent", color: "yellow" }}
                type="name"
                placeholder="Full Name"
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={{ span: 2, offset: 0 }}>
              Email*
            </Form.Label>
            <Col xs={15} sm={5} lg={3}>
              <Form.Control
                style={{ background: "transparent", color: "yellow" }}
                type="email"
                name="_replyto"
                placeholder="Email"
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={{ span: 2, offset: 0 }}>
              Phone
            </Form.Label>
            <Col xs={15} sm={5} lg={3}>
              <Form.Control
                style={{ background: "transparent", color: "yellow" }}
                type="tel"
                name="tel"
                placeholder="(optional)"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} id="description">
            <Form.Label column sm={{ span: 2, offset: 0 }}>
              Message*
            </Form.Label>
            <Col xs={15} sm={8} lg={6}>
              <Form.Control
                style={{ background: "transparent", color: "yellow" }}
                name="description"
                size="md"
                as="textarea"
                rows="5"
                placeholder={`Your message... `}
                required
              />
              <p style={{ padding: "0%", paddingTop: "1%" }}>
                (*) required fields
              </p>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 3, offset: 2 }} lg={{ span: 3, offset: 2 }}>
              <Button type="submit" variant="warning">
                send message
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default ContactForm
