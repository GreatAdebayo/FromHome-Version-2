import React from 'react'
import { Link } from 'react-router-dom'
import { Link as Link2 } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Fromhome</h3>
                <p>
                  <strong>Email:</strong> great@adebayogreat.dev<br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link2 to="hero" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a >Home</a></Link2></li>
                  <li><Link2 to="about" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a>About us</a></Link2></li>
                  <li><Link2 to="courses" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a to="courses">Courses</a></Link2></li>
                  <li><Link to="/signup"><i class="bx bx-chevron-right"></i> <a href="#">Signup</a></Link></li>
                </ul>
              </div>


              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Courses</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">HTML</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Bootstrap</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Wordpress</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Git</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">React</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
