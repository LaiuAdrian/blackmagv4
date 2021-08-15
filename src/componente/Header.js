

import { Link } from "react-router-dom";
import { Navbar, Nav, Container,Row,Col} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from "react";
import Logo from'../img/black-mag-logo.png'
import { FaBars ,FaUser ,FaRegTimesCircle } from "react-icons/fa";
import Search from "../componente/Search";

const Header =()=>{
  
  const Cos = [...useSelector(state => state.Cos)];
  const[mobil_meniu,setmMbil_meniu]=useState(false)
  // console.log(Cos)
    return(
      <>
        <Container fluid  className="meniu-desktop py-3">   
  
        <Container>
            <Row>
              <Col
                md={3}
              >
                <Navbar.Brand href="#home"> <img className="Brand-img" src={Logo} alt="Logo" /></Navbar.Brand>  
              </Col>
              <Col
                md={9}
              >
                <Nav className="ml-auto Meniu-d"> 
                    <Nav.Link className="Link-d"as={Link} to="/">Acasa</Nav.Link>
                    <Nav.Link className="Link-d"as={Link} to="/Magazin">Magazin</Nav.Link>
                    <Nav.Link className="Link-d"as={Link} to="/DespreNoi">Despre Noi</Nav.Link>
                    <Nav.Link className="Link-d"as={Link} to="/Contact">Contact</Nav.Link>
                    <Nav.Link className="Link-d"as={Link} to="/ContulMeu">Contul meu <FaUser className="Iconita ml-2" /></Nav.Link>
                    <Nav.Link className="Link-d d-flex"as={Link} to="/CosulMeu">
                    <p className="mr-2"> </p>
                    <div className="cos_produs">
                       <FaShoppingCart className='cos_icon'/> 
                       <div className="produs_cos_div">
                         <p className='produse_cos_p'>{Cos.length}</p> 
                       </div>       
                    </div>
                    </Nav.Link> 
                    <Nav.Link className="Link-d d-flex">
                          <Search />
                   </Nav.Link>
                   <Nav.Link className="Link-d"as={Link} to="/AdminPage">Admin</Nav.Link>
                </Nav>         
              </Col>
            </Row>
        </Container>
        
    </Container>

    <Container fluid  className="meniu-mobile">       
        <Container>
        <div className="meniu-mobile-comp"> 
             <Navbar.Brand href=""> <img className="Brand-img" src={Logo} alt="Logo" /></Navbar.Brand>  
             <div className="cos_produs mt-1">
                   <FaShoppingCart className='cos_icon'/> 
                    <div className="produs_cos_div">
                       <p className='produse_cos_p'>{Cos.length}</p> 
                     </div>     
                       
             </div>
             <div onClick={
              ()=>{
                setmMbil_meniu(!mobil_meniu)
              }
              }>
              {mobil_meniu ? <FaRegTimesCircle className="Iconita" /> : <FaBars className="Iconita" />}
             </div>
             
  
            
        </div>
        {mobil_meniu && 
         <div className="mobil_meniu"> 
                  <Nav.Link className="Link-m"as={Link} to="/">Acasa</Nav.Link>
                  <Nav.Link className="Link-m"as={Link} to="/Magazin">Magazin</Nav.Link>
                  <Nav.Link className="Link-m"as={Link} to="/Contact">Contact</Nav.Link>
                  <Nav.Link className="Link-d"as={Link} to="/ContulMeu">Contul meu <FaUser className="Iconita ml-2" /></Nav.Link>
         </div>   
          }
        </Container>
 
    </Container>
    
</>
    )
}

export default Header;