
import axios from "axios";
import Header from "../componente/Header"
import Footer from '../componente/Footer';
import React, { useState,useRef } from 'react';
import { Container,Row,Col} from 'react-bootstrap';


const CreazaCategorii=()=>{
 
    const [category_title ,setCategory_title ]= useState('');
    const [category_description ,setCategory_description ]= useState('');
    const [category_image ,setCategory_image ]= useState('');
    
    const fileUpload = useRef()
    const formData = new FormData()
    formData.append('category_title', category_title )
    formData.append('category_description', category_description )
    formData.append('category_image', category_image )

    const CreazaCat =(e)=>{

        e.preventDefault()
    
         axios.post('https://blackmagback.herokuapp.com/black-mag/api/v1/category/create-category-blackmag', formData)
      

       
            setCategory_title('')
            setCategory_description('')
            setCategory_image('')
      
}
console.log(category_title)
    return(
        <>
           <Header />
           <Container className="mt-5">
                <form  >
                  <Row>     
                    <Col sm={12} md={6}>
                    <div className="continut_campuri">
                        <div className="form_label">
                            <p className="text_cont">Titlu:</p>
                          
                            <input
                             value={category_title}
                            type="text"
                            name="name" 
                            onChange={e => setCategory_title(e.target.value)} 
                            required 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Descriere:</p>
                            
                            <input
                             value={category_description}
                            type="text"
                            name="name" 
                            onChange={e => setCategory_description(e.target.value)} 
                            required 
                            />
                        </div>
                      
                        <div className="form_label">
                            <p className="text_cont">Imagine</p>
                            
                            <input 
                            id='chat-image' 
                            ref={fileUpload} 
                            type='file' onChange={e => setCategory_image(e.target.files[0])} 
                            required 
                            />

                        </div>
            
                
    
                       </div>
                    </Col>

             </Row>
       </form>
       <button 
         className="buton_general"
         type="submit"
         value="Submit" 
         onClick={(event)=>CreazaCat(event)}
         >
       Trimite
      </button>
    
         
  
        

        </Container>
        <Footer />
            
        </>
   
    )
}


export default CreazaCategorii;