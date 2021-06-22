

import axios from "axios";
import { Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';

const Categorii =()=>{





    const url = 'http://dragpannel.herokuapp.com/api/v2/products/get-available-category'

    const [data, setData] = useState()
  
    useEffect(() => {
      axios.get(url).then(json => setData(json.data.category))
    }, [])




  

console.log(data)



    return(
       <>
         {data&& data.map(data => (
            <Col md={6}  xs={12}  key={data._id}>
             <div>     
        
                <img className ='img_produs' src={data.productCategory} alt={'nik'} />
                <h4 className="nume_produs">{data.productCategory}</h4>
              
         </div>
         </Col>
        )) } 
       </>
       
    )
}





  
  
  export default Categorii;