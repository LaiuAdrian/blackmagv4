
import Footer from '../componente/Footer';
import Header from '../componente/Header';
import CreazaCont from './CreazaCont';
import LogIn from './LogIn';
import { Container,Row,Col, Nav,Tab} from 'react-bootstrap';
import { FaUser,FaUserPlus } from "react-icons/fa";

const ContulMeu =()=>{

    return(
      <>
       <Header /> 
       <div>
         <h2 className="h2_bg">
           Contul Meu
         </h2>
       </div>
        <Container className="py-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="LogIn">
            <Row>
              <Col sm={4}>
                <Nav variant="pills" className="contul_meu">
                  <Nav.Item>
                    <Nav.Link className='link_default' eventKey="LogIn">
                       <div className="text-center">
                          <FaUser className="Iconita_mare" />
                          <h3>Logheaza-te in contul tau</h3>
                       </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className='link_default' eventKey="CreazaCont">
                    <div className="text-center">
                          <FaUserPlus className="Iconita_mare" />
                          <h3>Creaza-ti un cont  gratuit</h3>
                       </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="LogIn">
                       <LogIn />
                  </Tab.Pane>
                  <Tab.Pane eventKey="CreazaCont">
                     <CreazaCont />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
       <Footer />
      </>
    
    )
}

export default ContulMeu;