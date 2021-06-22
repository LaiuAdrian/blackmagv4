
import React, { useState } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import creaza_cont from'../img/creaza_cont.png';

const CreazaCont =()=>{
    const [user,setUser]= useState('');
    const [parola,seParola]= useState('');
    console.log(user)
    console.log(parola)
    return(
        <>

        <Container className="mt-5">
        <Row>
            <Col sm={12} md={6}>
            <img className="img_cont" src={creaza_cont} alt="Logo" />
            </Col>
            <Col sm={12} md={6}>
                <form>
                    <div className="continut_campuri">
                        <div className="form_label">
                            <p className="text_cont">User:</p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setUser({ ...user, title: e.target.value })} 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Parola: </p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => seParola({ ...parola, title: e.target.value })} 
                            />
                        </div>
                    </div>
                
                    <div className="buton_centru">
                        <button className="buton_general">Creaza cont</button>
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </Col>
        </Row>
         

        </Container>
     
        </>
       
    )
}
export default CreazaCont;