
import { Link } from "react-router-dom";
import Footer from '../componente/Footer';
import Header from '../componente/Header';
import { Container,Row,Col,Nav} from 'react-bootstrap';
import CreazaCategoriaIMG from'../img/CreazaCategoria.png'
import CreazaAtributeIMG from'../img/CreazaAtribute.png'
import CreazaProduseIMG from'../img/CreazaProduse.png'
import Api from '../componente/Api';
const AdminPage=()=>{

    console.log(Api.data)
    return(
        <>
        <Header />
           <Container>
               <Row>
                   <Col className="my-3" md={4} sm={4} xs={12} >
                       <h3 className="category_name">
                           Creaza Categorii
                       </h3>
                       <div>
                        <Nav.Link as={Link} to="/CreazaCategorii">
                        <img 
                         className ='img_creaza'
                         src={CreazaCategoriaIMG} 
                         alt={'nik'} />
                        </Nav.Link>   
                       </div>
                   </Col>
                   <Col className="my-3" md={4} sm={4} xs={12} >
                       <h3 className="category_name">
                           Creaza Atribute
                       </h3>
                       <div>
                        <Nav.Link >
                        <img 
                         className ='img_creaza'
                         src={CreazaAtributeIMG} 
                         alt={'nik'} />
                        </Nav.Link>   
                       </div>
                   </Col>
                   <Col className="my-3" md={4} sm={4} xs={12} >
                       <h3 className="category_name">
                           Creaza Produse
                       </h3>
                       <div>
                        <Nav.Link as={Link} to="/CreazaProduse">
                        <img 
                         className ='img_creaza'
                         src={CreazaProduseIMG} 
                         alt={'nik'} />
                        </Nav.Link>   
                       </div>
                   </Col>
               </Row>
           </Container>
        <Footer />
        </>
    )
}
export default AdminPage;