


import { Container,Row,Col} from 'react-bootstrap';
import Logo from'../img/black-mag-logo.png'

import { FaMobileAlt, FaMailBulk,FaMapMarkerAlt} from "react-icons/fa";
const Footer =()=>{

    return(
        <Container fluid  className="footer">       
        <Container className="py-5">
            <Row>
              <Col
                
                  md={3} xs={12} >
                     <div className="center_footer">
                    <img className="Brand-img" src={Logo} alt="Logo" />
                    <p className="text_footer mt-4">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u
                   </p>
                   </div>
              </Col>
              <Col
                  md={3} xs={12} >
                <div className="center_footer">
                   <h5 >Contact</h5>
                   <ul className="lista_footer">
                     <li>
                      <div className="d-flex">
                         <FaMobileAlt className="Iconita mr-3" />
                         <p><a className="text_footer" href="tel:123-456-7890">123-456-7890</a></p>
                      </div>
                     </li>
                     <li>
                      <div className="d-flex">
                         <FaMailBulk className="Iconita mr-3" />
                         <p><a className="text_footer" href="mailto:adrian.laiu@yahoo.com">adrian.laiu@yahoo.com</a></p>
                      </div>
                     </li>
                     <li>
                      <div className="d-flex">
                         <FaMapMarkerAlt className="Iconita mr-3" />
                         <p className="text_footer">Romania, Bacau</p>
                      </div>
                     </li>
                   </ul>
                </div>
              </Col>
              <Col
                  md={3} xs={12} >
                    <p className="text_footer">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u
                   t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cup
                   idatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
              </Col>
              <Col
                  md={3} xs={12} >
                    <p className="text_footer">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u
                   t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cup
                   idatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
              </Col>
            </Row>
        </Container>
        <div className="footer_drepturi text_footer py-1">
                  <p className="text-white">Toate drepturile sunt rezervate</p>
        </div>
    </Container> 
    )
}

export default Footer;