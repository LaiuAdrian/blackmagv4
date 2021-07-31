
import { useState } from 'react';
import { Container,Col,Row} from 'react-bootstrap';
import { useSelector, } from 'react-redux'
import Footer from '../componente/Footer';
import Header from '../componente/Header';
const CosulMeu =()=>{
const Cos = [...useSelector(state => state.Cos)];
// let [preTotal,setPretTotal]=useState(preTotal+Cos[nr].pret)

// let nr = Cos.length-1
// console.log(Cos[nr])
// useEffect(() => {
 
//     setPretTotal(preTotal+Cos[nr].pret)
  
//  }, [Cos[nr].pret]);
// Cos.sort((a, b) => (a.id > b.id) ? 1 : -1)
 
  const removeDuplicates=(Cos, key)=> {
    
    return [
      ...new Map(Cos.map(item => [key(item), item])).values()
    ]

  };

  const CosCurat=removeDuplicates(Cos, item => item.id)
  

  removeDuplicates(Cos, item => item.id)


  console.log(CosCurat)

 

  let preTotal = Cos.reduce((prev, cur)=> {
    return prev + cur.pret;
  }, 0);

 



    return(
       <>
       <Header />
       <div>
         <h2 className="h2_bg">
         Cosul meu
         </h2>
       </div>
      
       <Container>
           <Row>
                <Col className="my-3" md={8}  xs={12} >
                {CosCurat.map((data) =>
                
                        <div key={data.id}>
                            <div className="arata_cos">
                              <img className ='img_produs' src={data.galerie} alt={'nik'} />

                              <div>
                                <h3>{data.titlu}</h3>       
                                <p className="">Culoare: {data.atribute_culoare} </p>
                                <p className="">Marime: {data.atribute_marime}</p>
                              </div>
                              <div className="bucati_box">
                                <p className="buc_cos">{data.buc} Bucati</p>
                                
                              
                              
                              </div>
                              <div className="pret_box">
                                  <p>Pret<br />{data.pret} lei</p>
                                  <button onClick={
                                    console.log('sterge')
                                  }>
                                    Sterge
                                  </button>
                              </div>
                            </div>            
                        </div>
                        )              
      }
                </Col>
                <Col className="my-3" md={4}  xs={12}  key={Cos.id}>
                  <h4>
                    PretTotal {preTotal} lei
                  </h4>
                </Col>
           </Row>
       </Container>
   
       <Footer />
       </>
    )
}

export default CosulMeu;