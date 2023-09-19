import React from 'react';
import './Forms.css'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';


const Formpage = () => {
  return (
    <>
      <div className="Div" >
        <Container>
          <div className="background ">
            <Card className="Card">

              <Card.Body className="p-4 ">

                <Row className="mb-4 ">
                  <div className="formtitle">
                    <Card.Title className="Title">Senchola University</Card.Title>
                    <Card.Subtitle className="Subtitle"><span className="text-decoration-underline">U</span>SER FORM</Card.Subtitle>
                  </div>
                </Row>

                <Row className=" Inputrow">
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">First Name<span className="formspan">*</span></Form.Label>
                    <Form.Control type="password" placeholder="Enter your name" className="no-rounded-border" />
                  </Col>
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Last Name</Form.Label>
                    <Form.Control type="password" placeholder="Enter your name" className="no-rounded-border" />
                  </Col>
                </Row>


                <Row className=" Inputrow">
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Education Qualification<span className="formspan">*</span></Form.Label>
                    <Form.Select defaultValue="--Select your Degree--" className="no-rounded-border">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Father Name<span className="formspan">*</span></Form.Label>
                    <Form.Control type="password" placeholder="Enter Father Name" className="no-rounded-border" />
                  </Col>
                </Row>

                <Row className=" Inputrow">
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Phone Number<span className="formspan">*</span></Form.Label>
                    <Form.Control type="password" placeholder="Password" className="no-rounded-border" />
                  </Col>
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Email adderss<span className="formspan">*</span></Form.Label>
                    <Form.Control type="password" placeholder="Password" className="no-rounded-border" />
                  </Col>
                </Row>

                <Row className=" Inputrow">
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Date of Birth(Dob)<span className="formspan">*</span></Form.Label>
                    <Form.Control type="password" placeholder="Password" className="no-rounded-border" />
                  </Col>
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Your Batch no<span className="formspan">*</span></Form.Label>
                    <Form.Select defaultValue="--Select your Batch--" className="no-rounded-border">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="Inputrow">
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Your Domain<span className="formspan">*</span></Form.Label>
                    <Form.Select defaultValue="--Select your Domain--" className="no-rounded-border">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Password <span className="formspan">*</span></Form.Label>
                    <Form.Control type="password" placeholder="Password" className="no-rounded-border" />
                  </Col>
                </Row>


                <Row className="Inputrow">
                  <Col xs={12} md={6} className="formlable">
                    <Form.Label className="formlabel">Your Domain<span className="formspan">*</span></Form.Label>
                    <Form.Select defaultValue="--Select your Domain--" className="no-rounded-border">

                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>

                </Row>

                <Row className="mb-3 Inputrow">
                  <div className="d-grid p-5">
                    <Button className="registerbtn fw-bolder">
                      REGISTER
                    </Button>

                  </div>

                </Row>



                <Row className="Imagebackground">
                  <Col xs={12} md={6} className="formlable">

                  </Col>
                </Row>







              </Card.Body>

            </Card>


          </div>
        </Container>
        <Container class="containerimage">
          <div>


          </div>


        </Container>

        <div class="containerimag">

        </div>

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFECB3" fill-opacity="1" d="M0,0L120,21.3C240,43,480,85,720,133.3C960,181,1200,235,1320,261.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
      </div>

    </>
  )
}

export default Formpage;
