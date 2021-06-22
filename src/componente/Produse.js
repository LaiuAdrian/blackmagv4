

import axios from "axios";
import { Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Adauga_in_cos } from '../reducers';
import { Filtreaza_produse } from '../reducers';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams,
// } from "react-router-dom";


// const InfoProdus=()=>{
//   let { id } = useParams();
//   return <div style={{ fontSize: "50px" }}>
//        id produs: {id}
// </div>;
// }

const Produse=()=>{
  

    const Filtrare = [...useSelector(state => state.Filtrare)];
    const url = Filtrare[Filtrare.length - 1].api;
    const [data, setData] = useState();
    useEffect(async () => {
      await  axios.get(url).then(json => setData(json.data.data));
    }, [url])

    
console.log(Filtrare)
console.log(url)
  
  const Cos = [...useSelector(state => state.Cos)];
  console.log(Cos)
  const dispatch = useDispatch();
  // const[PretTotal,setPretTotal]=useState(0)
  let buc= 1;

 
console.log(Cos)
  // useEffect(() => {
  //     setPretTotal(PretTotal + data.pret)
  // }, [])
    
    return(
       <>
         {data&&data.map(data => (
            <Col className="my-3" md={3} sm={4} xs={6}  key={data._id}>
             <div>     
                <img className ='img_produs' src={data.galerie} alt={'nik'} />
                <h4 className="nume_produs">{data.titlu}</h4>
                <p className="pret_produs">{data.pret} lei</p>
                <button 
                className ="buton_produs"
                onClick={
                  ()=>{
               
                    
                    dispatch(Adauga_in_cos(data._id,data.pret,data.titlu,data.galerie,data.atribute,buc))
                   
                    }
                  }
                > 
                    Adauga in cos
                </button>
           </div>
         </Col>
        
        )) } 
   
       </>
       
    )
}





  
  
  export default Produse;