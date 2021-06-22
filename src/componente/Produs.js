
// import {connect} from 'react-redux';

// import { Col } from 'react-bootstrap';
// import { useState,useEffect } from 'react';

// const Produs =(props)=>{

//     const Click=()=>{
//         const [apasa,setApasa]=useState(0)
//         useEffect(() => {
//             setApasa(apasa+1)
//         });
//     }
    

// const Toate_Produsele = props.Produse;

// // const Afisare_Produs = Toate_Produsele.map((Toate_Produsele) => {
// //     return <Produs 
// //     key={Toate_Produsele.nume_produs}
// //      nume_produs={Toate_Produsele.nume_produs}
// //      pret_produs ={Toate_Produsele.pret_produs}
// //      poza_produs ={Toate_Produsele.poza_produs}
// //      />
           
// // });



//     // console.log(props)
//     return(
//        <>
//         {Toate_Produsele.map(Toate_Produsele => (
//             <Col md={3}  xs={12}  key={Toate_Produsele.id}>
//              <div>     
//                  <h2>{Click.apasa}</h2>
//                 <img className ='img_produs' src={Toate_Produsele.poza_produs} alt={'nik'} />
//                 <h4 className="nume_produs">{Toate_Produsele.nume_produs}</h4>
//                 <p className="pret_produs">{Toate_Produsele.pret_produs}</p>
//                 <button 
//                 className ="buton_produs"
//                 onClick={Click}
//                 > 
//                     Adauga in cos
//                 </button>
//          </div>
//          </Col>
//         ))}

            
       
       
     
//        </>
       
//     )
// }




// const mapStateToProps=(props)=>{
//     return {
//         Produse:props.Produse,
  
     
//     };
//   }
  
  
//   export default  connect(mapStateToProps)(Produs);