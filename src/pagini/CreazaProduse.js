
import Footer from '../componente/Footer';
import { Container,Row,Col} from 'react-bootstrap';
import React, { useState,useRef,useEffect } from 'react';
import axios from "axios";
import Header from "../componente/Header"

const CreazaProduse =()=>{

    const [titlu,setTitlu]= useState('');
    const [descriere,setDescriere]= useState('');
    const [pret,setPret]= useState(0);
    const [categorie,setCategorie]= useState('');
    const [stock,setStock]= useState(0);
    const [atribute_marime,setAtribute_marime]= useState('');
    const [atribute_culoare,setAtribute_culoare]= useState('');
    const [galerie, setGalerie] = useState('')
    const fileUpload = useRef()
    console.log(galerie)
    console.log(fileUpload)
    const formData = new FormData()
    formData.append('titlu', titlu )
    formData.append('descriere', descriere )
    formData.append('pret', pret )
    formData.append('categorie', categorie )
    formData.append('stock', stock )
    formData.append('atribute_culoare', atribute_culoare )
    formData.append('atribute_marime', atribute_marime )
    formData.append('galerie', galerie )

    console.log(...formData)

    const Creaza =(e)=>{

        e.preventDefault()
            axios.post('https://blackmagback.herokuapp.com/black-mag/api/v1/product/create-product', formData)
                setTitlu('')
                setDescriere('')
                setPret(0)
                setCategorie('')
                setStock(0);
                setAtribute_marime('')
                setAtribute_culoare('')
   
}
    const url = 'https://blackmagback.herokuapp.com/black-mag/api/v1/category/get-all-cateogry-balck-mag'

    const [Categorii, setCategorii] = useState()

    useEffect(() => {
    axios.get(url).then(json => setCategorii(json.data.categories))
    }, [])

    console.log(Categorii)
    
   Categorii?.map(Cat_Nume=>{
       console.log(Cat_Nume.category_title)
   })
   
    return(
        <>
        <Header />
        <Container className="my-4">
                <form  >
                  <Row>     
                    <Col sm={12} md={6}>
                    <div className="continut_campuri">
                        <div className="form_label">
                            <p className="text_cont">Titlu:</p>
                          
                            <input
                            value={titlu}
                            type="text"
                            name="name" 
                            onChange={e => setTitlu(e.target.value)} 
                            required 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Descriere:</p>
                            
                            <input
                            value={descriere}
                            type="text"
                            name="name" 
                            onChange={e => setDescriere(e.target.value)} 
                            required 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Pret:</p>
                            
                            <input
                           value={pret}
                            type="number"
                            name="name" 
                            onChange={e => setPret(e.target.value )} 
                            required 
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Categorie:</p>
                            <label>
                                    <select 
                                        value={categorie}
                                        onChange={e => setCategorie(e.target.value)} 
                                        required 
                                        className="select"
                                    >
                                           { Categorii?.map(val => (
                                        <option value={val.category_title}
                                         key={val.category_title}>
                                         {val.category_title}
                                        </option>

                                        ))}
                                    </select>
                             </label>
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
                                type='file' onChange={e => setGalerie(e.target.files[0])} 
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
                                value={stock}
                                type="number"
                                name="name" 
                                onChange={e => setStock( e.target.value)} 
                                required 
                                />
                            </div>
                            <div className="form_label">
                                <p className="text_cont">Culoare:</p>
                                <label>
                                    <select 
                                        value={atribute_culoare}
                                        onChange={e => setAtribute_culoare(e.target.value)} 
                                        required 
                                        className="select"
                                    >
                                        <option value="rosu">rosu</option>
                                        <option value="verde">verde</option>
                                        <option value="negru">negru</option>
                                        <option value="alb">alb</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form_label">
                                <p className="text_cont">Marime:</p>
                                 <label>
                                    <select  
                                        value={atribute_marime}
                                        onChange={e => setAtribute_marime( e.target.value)}
                                        required 
                                        className="select"
                                    
                                    >
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </label>
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
<Footer />
</>

             
    )
}


  export default CreazaProduse;