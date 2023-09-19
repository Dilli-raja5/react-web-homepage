import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Homeimages from './images';
import './Testimonial.css'

const peopleData = [
    { name: 'John', role: 'developer' },
    { name: 'Mary', role: 'Tester' },
    { name: 'Maddy', role: 'Project Manager' },
    { name: 'Ruby', role: 'DevOps Engineer' }
];






const Testimonials = () => {
    return (
        <div className='testimonial-content p-5'>
            <div className='text-center'>
                <h1 className='testimonial-title'>Testimonials</h1>
                <p>What people say about us</p>
                <FontAwesomeIcon icon={faBookOpen} className="custom-book-icon" />
                <div className='testimonialbockground'></div>
                <div className='testimonialbockground2'></div>


            </div>
            <Container>
                <Row className='my-lg-5'>
                    {peopleData.map((person, index) => (
                        <Col key={index} xs={12} md={6} lg={4} xl={3}>
                            <Card className='testimonialcol'>
                                <div className='d-flex testimonialicon'>
                                    {[...Array(5)].map((_, starIndex) => (
                                        <FontAwesomeIcon key={starIndex} icon={faStar} className="faStar" />
                                    ))}
                                </div>
                                Some quick example text to build on the card title and make up the bulk of the card's content
                                <div className='d-flex testimonialbottom'>
                                    <Image src={Homeimages.girl} className='testimonial-image' alt='' />
                                    <div className='mx-3'>
                                        <Card.Title>{person.name}</Card.Title>
                                        <Card.Subtitle className="">{person.role}</Card.Subtitle>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}

                </Row>

            </Container>

        </div>
    );
};

export default Testimonials;