
import { Container,Row,Col } from 'react-bootstrap';
import Header from '../componente/Header';

import Footer from '../componente/Footer';
import Produse from '../componente/Produse';
import Filtreaza from '../componente/Filtreaza';
const Magazin =()=>{



    return(
      <>
      <Header />
      <div>
         <h2 className="h2_bg">
        Toate produsele
         </h2>
       </div>
      <Container fluid>  
        <Container>
            <Row>       
              <Col md={3}>
                <Filtreaza />
              </Col> 
              <Col md={9}>
                <div>
                  <Row>
                     <Produse />
                  </Row>
                </div>
              </Col>                     
            </Row>
        </Container>

      </Container>
      <Footer />

      </>
    )
}




export default  Magazin;