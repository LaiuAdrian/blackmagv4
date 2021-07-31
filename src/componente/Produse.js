

import axios from "axios";
import { Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Adauga_in_cos } from '../reducers';

// const arr1 = [2, 6, 7, 1, 7, 8, 4, 3];
// const arr2 = [5, ,7, 2, 2, 1, 3];
// const arr3 = [1, 56, 345, 6, 54, 2, 68, 85, 3];
// const arr4 = [3,2,5];
// const arr5 = [1,2,5];
// const intersection = (arr1, arr2) => {
//    const res = [];
//    for(let i = 0; i < arr1.length; i++){
//       if(!arr2.includes(arr1[i])){
//          continue;
//       };
//       res.push(arr1[i]);
//    };
//    return res;
// };
// const intersectMany = (...arrs) => {
//    let res = arrs[0].slice();
//    for(let i = 1; i < arrs.length; i++){
//       res = intersection(res, arrs[i]);
//    };
//    return res;
// };
// console.log(intersectMany(arr1, arr2, arr3,arr4));
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
     const json = await  axios.get(url)
      setData(json.data.data);
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
               
                    
                    dispatch(Adauga_in_cos(
                      data._id,
                      data.pret,
                      data.titlu,
                      data.categorie,
                      data.galerie,
                      data.stock,
                      data.atribute_marime,
                      data.atribute_culoare
                      ))
                   
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