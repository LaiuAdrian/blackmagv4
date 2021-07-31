
import React, { useState } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import creaza_cont from'../img/creaza_cont.png';
import axios from "axios";
const CreazaCont =()=>{

    const [nume,setNume]= useState('');
    const [prenume,setPrenume]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [passwordConfirm,setPasswordConfirm]= useState('');
   

    // if (password === passwordConfirm){
    //     console.log('ok')
    // }
    // else {
    //     setPassword('');
    //     setPasswordConfirm('');
  
    // }
   const cont ={
        nume,
        prenume,
        email,
        password,
        passwordConfirm

    }
    console.log(cont)

    const CreazaCont = async(e)=>{
        const  token= '123';
        localStorage.setItem('token', token);
   
        e.preventDefault()
    
    await axios.post('https://blackmagback.herokuapp.com/black-mag/api/v1/user/create-account-blackmag', cont)
        //  .then(response => response.json())
        //  .then(result => {console.log(result)})
        //  .catch(e=>{console.log(e)})

}

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
                            <p className="text_cont">Nume:</p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setNume(e.target.value )} 
                            required
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Prenume:</p>
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setPrenume(e.target.value )} 
                            required
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">E-mail:</p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setEmail(e.target.value )} 
                            required
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Password: </p>
                            
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setPassword(e.target.value )} 
                            required
                            />
                        </div>
                        <div className="form_label">
                            <p className="text_cont">Rep. password </p>          
                            <input
                            type="text"
                            name="name" 
                            onChange={e => setPasswordConfirm(e.target.value )} 
                            required
                            />
                        </div>
                    </div>
                
                    <div className="buton_centru">
                        <button className="buton_general" 
                         onClick={(event)=>CreazaCont(event)}
                         >
                            Creaza cont
                        </button>
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