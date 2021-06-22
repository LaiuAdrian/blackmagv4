

import { Container,Row,Col} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from "axios";



const CreazaProduse =()=>{
    const [titlu,setTitlu]= useState('');
  

    
const Creaza =()=>{
 
        // POST request using axios inside useEffect React hook
        const produs = { 
            titlu: 'Test prodcut',
            atribute:['Negru','XXL'],
            galerie:['https://canary..wish.com/api/webimage/5c1c8720f8f22659105e4726-large.jpg?cache_buster=5b5d42ef1a7d60c137c2b438b90fb8a9'],
            descriere:'Lorem ipsum',
            pret:199,
            stock:25,
            categorie:'Jartiere',
        }
        axios.post('https://blackmagback.herokuapp.com/black-mag/api/v1/product/create-product', produs)
            .then(response => setTitlu());
 
}
// https://blackmagback.herokuapp.com/black-mag/api/v1/product/create-product

    return(
        <>
        <Container className="mt-5">
        <Row>
           
            <Col sm={12} md={6}>
                <form>
                    <div className="continut_campuri">
                        <div className="form_label">
                            <p className="text_cont">User:</p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setTitlu({ ...titlu, title: e.target.value })} 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Parola: </p>
                            
                         
                        </div>
                    </div>
                
                    <div className="buton_centru">
                        <button 
                        className="buton_general"
                        onClick={Creaza()}
                        >
                            Login In</button>
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </Col>
            <Col sm={12} md={6}>
            {/* <img className="img_cont" src={Log_in} alt="Logo" /> */}
            </Col>
        </Row>
        

        </Container>

</>
             
    )
}


  export default CreazaProduse;