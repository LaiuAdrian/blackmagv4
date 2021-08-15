

import axios from "axios";
import { Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';

const Categorii =()=>{





    const url = 'https://blackmagback.herokuapp.com/black-mag/api/v1/category/get-all-cateogry-balck-mag'

    const [data, setData] = useState()
  
    useEffect(() => {
      axios.get(url).then(json => setData(json.data.categories))
    }, [])




  

console.log(data)



    return(
       <>
         {data&& data.map(data => (
            <Col md={4}  xs={6}  key={data._id}>
             <div>     
        
                <img className ='img_produs' src={data.category_image} alt={'nik'} />
                <h3 className="category_name">{data.category_title}</h3>
              
         </div>
         </Col>
        )) } 
       </>
       
    )
}





  
  
  export default Categorii;