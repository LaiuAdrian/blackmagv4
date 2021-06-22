
import { Container,Row,Col} from 'react-bootstrap';
import React, { useState } from 'react';
import Log_in from'../img/log_in.png';



const LogIn =(state)=>{
    const [user,setUser]= useState('Nelu');
    const [parola,seParola]= useState('0');
  



    return(
        <>
        <Container className="mt-5">
        <Row>
            <Col sm={12} md={6}>
            <img className="img_cont" src={Log_in} alt="Logo" />
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
                        <button className="buton_general">Login In</button>
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </Col>
        </Row>
        

        </Container>

</>
             
    )
}


  export default LogIn;