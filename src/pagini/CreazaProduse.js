

import { Container,Row,Col} from 'react-bootstrap';
import React, { useState,useRef } from 'react';
import axios from "axios";


const CreazaProduse =()=>{

    const [titlu,setTitlu]= useState('');
    const [descriere,setDescriere]= useState('');
    const [pret,setPret]= useState(0);
    const [categorie,setCategorie]= useState('');
    const [stock,setStock]= useState(0);
    const [atribute_marime,setAtribute_marime]= useState('');
    const [atribute_culoare,setAtribute_culoare]= useState('');
    const [image, setImage] = useState('')
    // const [atribute,setAtribute]=useState[culoare,marime]
    
    const fileUpload = useRef()
    console.log(image)
    console.log(fileUpload)

    const formData = new FormData()
    formData.append('titlu', titlu )
    formData.append('descriere', descriere )
    formData.append('pret', pret )
    formData.append('categorie', categorie )
    formData.append('stock', stock )
    formData.append('atribute_culoare', atribute_culoare )
    formData.append('atribute_marime', atribute_marime )
    formData.append('galerie', image )

console.log(...formData)

const Creaza =(e)=>{
   

        e.preventDefault()
    
         axios.post('https://blackmagback.herokuapp.com/black-mag/api/v1/product/create-product', formData)
        //  .then(response => setTitlu());

}

// console.log(produs)
// https://blackmagback.herokuapp.com/black-mag/api/v1/product/create-product

    return(
        <>
        <Container className="mt-5">
                <form  >
                  <Row>     
                    <Col sm={12} md={6}>
                    <div className="continut_campuri">
                        <div className="form_label">
                            <p className="text_cont">Titlu:</p>
                          
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setTitlu(e.target.value)} 
                            required 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Descriere:</p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setDescriere(e.target.value)} 
                            required 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Pret:</p>
                            
                            <input
                            type="number"
                            name="name" 
                            onChange={e => setPret(e.target.value )} 
                            required 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Categorie:</p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setCategorie(e.target.value)} 
                            required 
                            />
                        </div>
                     
                        {/* <div className="form_label">
                            <p className="text_cont">Titlu:</p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setTitlu({ ...titlu, title: e.target.value })} 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Titlu:</p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setTitlu({ ...titlu, title: e.target.value })} 
                            />
                        </div> */}
                        <div className="form_label">
                            <p className="text_cont">Imagine</p>
                            
                            <input 
                            id='chat-image' 
                            ref={fileUpload} 
                            type='file' onChange={e => setImage(e.target.files[0])} 
                            required 
                            />

                        </div>
            
                
                   
                    {/* <input type="submit" value="Submit" /> */}
                       </div>
                    </Col>
                    <Col sm={12} md={6}>
                    <div className="continut_campuri">
                    <div className="form_label">
                                <p className="text_cont">Stock:</p>
                                <input
                                type="number"
                                name="name" 
                                onChange={e => setStock( e.target.value)} 
                                required 
                                />
                            </div>
                            <div className="form_label">
                                <p className="text_cont">Culoare:</p>
                                
                                <input
                                type="text"
                                name="name" 
                                onChange={e => setAtribute_culoare(e.target.value)} 
                                required 
                                />
                            </div>
                            <div className="form_label">
                                <p className="text_cont">Marime:</p>
                                
                                <input
                                type="text"
                                name="name" 
                                onChange={e => setAtribute_marime( e.target.value)} 
                                required 
                                />
                            </div>
                            <div className="buton_centru">
                                <button 
                                    className="buton_general"
                                    type="submit"
                                     value="Submit" 
                                     onClick={(event)=>Creaza(event)}
                                    >
                                    Trimite
                                </button>
                           </div>
                           </div>
                    </Col>
             </Row>
                </form>
           
            {/* <img className="img_cont" src={Log_in} alt="Logo" /> */}
         
  
        

        </Container>

</>
             
    )
}


  export default CreazaProduse;