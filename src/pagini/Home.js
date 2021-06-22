


import Header from '../componente/Header';
import { Carousel, Container,Row } from 'react-bootstrap';
import Footer from '../componente/Footer';
import Categorii from '../componente/Categorii';
 import slider1 from'../img/slider1.png'
const Home =()=>{
    return(
      <>
      <Header />
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      
      </Carousel>
      <div>
         <h2 className="h2_bg">
           Categoriile noastre
         </h2>
       </div>

      <Container>
        <Row>
          <Categorii />
        </Row>
      </Container>
     
       <Footer/>
      </>
    )
}
export default Home;