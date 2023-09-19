import React from 'react';
import './Home.css';
import { Container, Image } from 'react-bootstrap';
import Homeimages from './images';
import {
  faBook, faTag, faAward, faChevronRight, faBookOpen, faBriefcase, faLaptop, faMessage,
  faBullhorn, faFileExcel, faPlayCircle, faUnlink, faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Testimonials from './Testimonoal';


const Home = () => {
  return (
    <>

      <div className='container p-5 mt-md-5'>
        <div className='row rowtitle'>
          <div className="rowtitleground"></div>
          <FontAwesomeIcon icon={faBookOpen} size='3x' className="custom-book-icon1" />

          <FontAwesomeIcon icon={faBookOpen} size='3x' className="custom-book-icon2" />

          <div className='col-md-6 '>
            <div className='header-left-content mt-5'>
              <h1 className='fw-500'>Build Your Career With Senchola</h1>
              <p className='header-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
              <button className='btn btn-success'>Learn More</button>
            </div>
          </div>
          <div className='col-md-6 mt-md-3'>
            <div className='header-right-content mt-3 text-center'>
              <Image src={Homeimages.lesson} className='guylesson img-fluid' alt='Guy Learning' effect='blur' />



            </div>
          </div>
        </div>
      </div>
      {/* firstsectionend */}

      {/* Second-section-start*/}
      <div className='container px-md-5 p-5 '>
        <div className='row mt-5'>
          <h1 className='fw-400 text-center feature-title col-12'>Explore Our Program</h1>
          <div className='col-md-4 mb-3   py-3 '>
            <div className='program d-flex flex-column align-items-center'>
              <FontAwesomeIcon icon={faBook} size='3x' className='mb-2' />
              <h2 className='mt-2 mb-3'>Programs</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
              <button className='btn btn-outline-success mb-3'>See More <FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
          </div>
          <div className='col-md-4 mb-3  py-3'>
            <div className='pricing d-flex flex-column align-items-center'>
              <FontAwesomeIcon icon={faTag} size='3x' className='mb-2' />
              <h2 className='mt-2 mb-3'>Pricing</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
              <button className='btn btn-outline-success mb-3'>See More <FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
          </div>
          <div className='col-md-4 mb-3  py-3'>
            <div className='certifications d-flex flex-column align-items-center'>
              <FontAwesomeIcon icon={faAward} size='3x' className='mb-2' />
              <h2 className='mt-2 mb-3'>Certifications</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
              <button className='btn btn-outline-success mb-3'>See More <FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
          </div>
        </div>
      </div>
      {/* Second-section-end */}

      <div className='feature-main-container d-lg-flex p-lg-3 p-sm-5'>
        {/* Left Section */}
        <div className='feature-left-content mx-5 col-sm-6 col-md-8 col-lg-3 py-3'>
          <h1 className='fw-500 py-2'>Expert Talent With Curated Resources & Support</h1>
          <p className='py-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
          </p>
          <button className='btn btn-success feature-btn'>See More</button>
        </div>

        {/* Right Section */}

        <div className='feature-right-content d-flex flex-wrap'>
          <div className='right-card col-md-5 col-lg-5 m-3'>
            <div className='card-1 mt-5'>
              <div className='d-flex justify-content-center align-items-center rounded-circle icon-box-1'>
                <FontAwesomeIcon icon={faBookOpen} size='2x' />
              </div>
              <h3 className='text-white my-3'>Good Infrastructure</h3>
              <p className='text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
              </p>
            </div>
          </div>

          <div className='right-card col-md-5 col-lg-5 m-3'>
            <div className='card-2 mt-5'>
              <div className='d-flex justify-content-center align-items-center rounded-circle icon-box-2'>
                <FontAwesomeIcon icon={faBriefcase} size='2x' />
              </div>
              <h3 className='my-3'>Business</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
              </p>
            </div>
          </div>

          <div className='right-card col-md-5 col-lg-5 m-3'>
            <div className='card-3 mt-5'>
              <div className='d-flex justify-content-center align-items-center rounded-circle icon-box-3'>
                <FontAwesomeIcon icon={faLaptop} size='2x' />
              </div>
              <h3 className='my-3'>Best Support Team</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
              </p>
            </div>
          </div>

          <div className='right-card col-md-5 col-lg-5 m-3'>
            <div className='card-4 mt-5'>
              <div className='d-flex justify-content-center align-items-center rounded-circle icon-box-4'>
                <FontAwesomeIcon icon={faMessage} size='2x' />
              </div>
              <h3 className='my-3'>Senchola Managed</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* third-section-start */}


      <div className='feature3-main-content  d-lg-flex flex-lg-row flex-md-row '>
        {/* Left Section */}
        <div className='feature3-left-content  '>
          <Image src={Homeimages.girl} className='orange' alt='Orange' effect='blur' />

          <div className='feature3-box'>
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <div className="box d-flex">
                  <FontAwesomeIcon icon={faUnlink} className="icon-1" />
                  <div>
                    <p className='m-0'>5 courses</p>
                    <h5>UI/UX</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-8">
                <div className="box d-flex">
                  <FontAwesomeIcon icon={faBullhorn} className="icon-2" />
                  <div>
                    <p className='m-0'>4 courses</p>
                    <h5>Marketing</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-8">
                <div className="box d-flex">
                  <FontAwesomeIcon icon={faFileExcel} className="icon-3" />
                  <div>
                    <p className='m-0'>10 courses</p>
                    <h5>Testing</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='feature3-right-content  col-lg-4 mx-lg-5 '>
          <h1>Learn Without Limit and Spread Knowledge</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
          </p>
          <button className='btn btn-success'>See More</button>
          <FontAwesomeIcon icon={faPlayCircle} size='2x' className='mx-3 play-icon' />
          <h3 className='feature3-h3'>Watch Video</h3>
          <p className='mt-3'>Recent Engagement</p>
          <h1 className='count'>200+</h1>
          <p className='count'>Students</p>
          <h1 className='count'>6+</h1>
          <p className='count'>Courses</p>
        </div>
      </div>
      {/* third-section-end */}

      {/* fourth-section-image start */}


      <div className='main-container m-5 '>
        <div className='gallery-heading my-5'>
          <h1 className='fw-500 text-center gallery-title'>Our Gallery</h1>


        </div>

        <Container>
          <div className="container mt-5">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <Image
                  src={Homeimages.image2}
                  alt="Image1"
                  effect='blur'
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <Image
                  src={Homeimages.image3}
                  alt="Image2"
                  effect='blur'
                  className="img-fluid rounded mb-4"
                />
                <Image
                  src={Homeimages.image4}
                  alt="Image3"
                  effect='blur'
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <Image
                  src={Homeimages.image5}
                  alt="Image4"
                  effect='blur'
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* fourth-section-image end */}

      {/* fifth-testimonoal-section */}

      <Testimonials />
      {/* fifth-testimonoal-section-end */}




    </>
  )
}



export default Home
