import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [formState, handleSubmit] = useForm("xeogzajw");

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    subject: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                        <ValidationError prefix="Email" field="email" errors={formState.errors} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select
                          className="role"
                          name="role"
                          value={formDetails.role}
                          onChange={(e) => onFormUpdate('role', e.target.value)}
                          required
                        >
                          <option value="">👥 Select Role</option>
                          <option value="Visitor">👤 Visitor</option>
                          <option value="Friend">👨‍💼 Friend</option>
                          <option value="Software Engineer">👨‍💻 Software Engineer</option>
                          <option value="HR">🧑‍💼 HR</option>
                        </select>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select 
                          className="role"
                          name="subject"
                          value={formDetails.subject}
                          onChange={(e) => onFormUpdate('subject', e.target.value)}
                          required
                        >
                          <option value="">🎯 Select Purpose</option>
                          <option value="General Inquiry">❓ General Inquiry</option>
                          <option value="Job Opportunity">💼 Job Opportunity</option>
                          <option value="Collaboration">🤝 Collaboration</option>
                          <option value="Feedback">📝 Feedback</option>
                        </select>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          id="message"
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>

                        {/* Hidden field for formatted message */}
                        <textarea
                          name="message"
                          style={{ display: "none" }}
                          value={`━━━━━━━━━━━━━━━━━━━\n📨 NEW CONTACT FORM SUBMISSION\n━━━━━━━━━━━━━━━━━━━\n\n👤 FULL NAME:\n${formDetails.firstName} ${formDetails.lastName}\n\n💼 ROLE:\n${formDetails.role}\n\n🎯 SUBJECT:\n${formDetails.subject}\n\n📧 EMAIL ADDRESS:\n${formDetails.email}\n\n📞 PHONE NUMBER:\n${formDetails.phone}\n\n📝 MESSAGE:\n${formDetails.message}\n\n━━━━━━━━━━━━━━━━━━━\n📅 Submitted on: ${new Date().toLocaleDateString()}\n━━━━━━━━━━━━━━━━━━━`}
                          readOnly
                        />

                        <ValidationError prefix="Message" field="message" errors={formState.errors} />
                        <button type="submit" disabled={formState.submitting}><span>submit</span></button>


                        {formState.succeeded && (
                          <p className="success mt-2">Message sent successfully!</p>
                        )}
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
