
import axios from "axios";
import { useEffect, useState } from "react";






const Api=()=>{
  const url = 'http://dragpannel.herokuapp.com/api/v2/products/getAllProducts--shop'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])
  console.log(data)
  
    return(
        <h1>Api</h1>
    )
}


export default Api;